(self.webpackChunk=self.webpackChunk||[]).push([[9538],{98165:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(87462),a=n(62435),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M168 504.2c1-43.7 10-86.1 26.9-126 17.3-41 42.1-77.7 73.7-109.4S337 212.3 378 195c42.4-17.9 87.4-27 133.9-27s91.5 9.1 133.8 27A341.5 341.5 0 01755 268.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.7 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c0-6.7-7.7-10.5-12.9-6.3l-56.4 44.1C765.8 155.1 646.2 92 511.8 92 282.7 92 96.3 275.6 92 503.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8zm756 7.8h-60c-4.4 0-7.9 3.5-8 7.8-1 43.7-10 86.1-26.9 126-17.3 41-42.1 77.8-73.7 109.4A342.45 342.45 0 01512.1 856a342.24 342.24 0 01-243.2-100.8c-9.9-9.9-19.2-20.4-27.8-31.4l60.2-47a8 8 0 00-3-14.1l-175.7-43c-5-1.2-9.9 2.6-9.9 7.7l-.7 181c0 6.7 7.7 10.5 12.9 6.3l56.4-44.1C258.2 868.9 377.8 932 512.2 932c229.2 0 415.5-183.7 419.8-411.8a8 8 0 00-8-8.2z"}}]},name:"sync",theme:"outlined"},s=n(84089),o=function(e,t){return a.createElement(s.Z,(0,r.Z)({},e,{ref:t,icon:c}))};var i=a.forwardRef(o)},62776:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return J}});var r=n(19632),a=n.n(r),c=n(64599),s=n.n(c),o=n(15009),i=n.n(o),u=n(97857),l=n.n(u),d=n(99289),f=n.n(d),p=n(5574),m=n.n(p),x=n(70423),h=n(64119),b=n(11774),k=n(92340),v=n(38345),y=n(59530),w=n(80507),N=n(45360),g=n(83062),j=n(42075),_=n(86738),M=n(57953),S=n(15867),C=n(2058),A=n(55835),Z=n(28316),P=n(62435),U=n(38592),q=n(31120),I=n(94149),K=n(3355),D=n(48689),L=n(87462),R={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 912H144c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32h360c4.4 0 8 3.6 8 8v56c0 4.4-3.6 8-8 8H184v656h656V520c0-4.4 3.6-8 8-8h56c4.4 0 8 3.6 8 8v360c0 17.7-14.3 32-32 32zM770.87 199.13l-52.2-52.2a8.01 8.01 0 014.7-13.6l179.4-21c5.1-.6 9.5 3.7 8.9 8.9l-21 179.4c-.8 6.6-8.9 9.4-13.6 4.7l-52.4-52.4-256.2 256.2a8.03 8.03 0 01-11.3 0l-42.4-42.4a8.03 8.03 0 010-11.3l256.1-256.3z"}}]},name:"export",theme:"outlined"},F=n(84089),O=function(e,t){return P.createElement(F.Z,(0,L.Z)({},e,{ref:t,icon:R}))};var T=P.forwardRef(O),z=n(98165),B=n(37786),E=n(2153),Q=n(27484),Y=n.n(Q),H=n(95892),V=n(86074),W=(0,B.ZP)(H),J=function(){var e=(0,y.useDispatch)(),t=N.ZP.useMessage(),n=m()(t,2),r=n[0],c=n[1],o=(0,y.useSelector)((function(e){return e.global.session})),u=(0,y.useSelector)((function(e){return e.wallet.dataSource})),d=(0,y.useSelector)((function(e){return e.wallet.wallets})),p=(0,y.useSelector)((function(e){return e.wallet.locks})),L=(0,P.useState)(!1),R=m()(L,2),F=R[0],O=R[1],B=(0,P.useState)(""),Q=m()(B,2),H=Q[0],J=Q[1],X=(0,P.useState)(-1),G=m()(X,2),$=G[0],ee=G[1],te=(0,P.useState)([]),ne=m()(te,2),re=ne[0],ae=ne[1],ce=(0,P.useState)([]),se=m()(ce,2),oe=se[0],ie=se[1],ue=(0,P.useRef)(),le=(0,P.useRef)(),de=(0,P.useRef)(),fe=(0,P.useRef)(),pe=(0,P.useRef)(),me=(0,y.useIntl)(),xe=me.formatMessage({id:"tools.wallet.intlImportSuccess"}),he=me.formatMessage({id:"tools.wallet.intlImportFail"}),be=me.formatMessage({id:"tools.wallet.intlImportPrivateKey"}),ke=me.formatMessage({id:"tools.wallet.intlImportPrivateKeys"}),ve=me.formatMessage({id:"tools.wallet.intlBackupPrivateKey"}),ye=me.formatMessage({id:"tools.wallet.intlRestorePrivateKey"}),we=me.formatMessage({id:"tools.wallet.intlRestoreSuccess"}),Ne=me.formatMessage({id:"tools.wallet.intlRestoreFail"}),ge=me.formatMessage({id:"tools.wallet.intlBackupSuccess"}),je=me.formatMessage({id:"tools.wallet.intlBatchUpdate"}),_e=me.formatMessage({id:"tools.wallet.intlSelectAccount"}),Me=me.formatMessage({id:"account.intlBalance"}),Se=me.formatMessage({id:"account.intlAccount"}),Ce=me.formatMessage({id:"tools.wallet.intlResource"}),Ae=me.formatMessage({id:"tools.wallet.intlOperation"}),Ze=me.formatMessage({id:"tools.wallet.intlWetherToDelete"}),Pe=me.formatMessage({id:"tools.wallet.intlUpdateComplete"}),Ue=me.formatMessage({id:"tools.wallet.intlDeleteSuccess"}),qe=me.formatMessage({id:"tools.wallet.intlStatus"}),Ie=me.formatMessage({id:"tools.wallet.intlBatchDelete"}),Ke=me.formatMessage({id:"tools.wallet.intlTransfer"}),De=me.formatMessage({id:"tools.wallet.intlAction"}),Le=me.formatMessage({id:"tools.wallet.intlLockAll"}),Re=me.formatMessage({id:"tools.wallet.intlAttention"}),Fe=function(e){return e>=1048576?(e/1024/1024).toFixed(2)+" MB":e>=1024?(e/1024).toFixed(2)+" KB":e+" B"},Oe=function(e){return e>=1e6?(e/1e3/1e3).toFixed(2)+" s":e>=1e3?(e/1e3).toFixed(2)+" ms":e+" us"},Te=(0,P.useCallback)(function(){var t=f()(i()().mark((function t(n){var a,c,s,o,f;return i()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,q.Q)(q.db.wallets.delete(n));case 2:if(a=t.sent,c=m()(a,1),!(s=c[0])){t.next=8;break}return r.error(s),t.abrupt("return",!1);case 8:o=u.filter((function(e){return e.key!==n})),f=d.filter((function(e){return e.key!==n})),e(U.N.setDataSource(o)),e(U.N.setWallets(f)),delete p[n],e(U.N.setLocks(l()({},p))),r.success(Ue);case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[u,d,p]),ze=(0,P.useCallback)(function(){var t=f()(i()().mark((function t(n,c){var d,f,p,x,b,k,v,y,w,N,g,j,_,M,S,C;return i()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:ee(c),d=u.filter((function(e){return e.key===n})),f=u.filter((function(e){return e.key!==n})),p=new Set,x=s()(d);try{for(x.s();!(b=x.n()).done;)k=b.value,p.add(k.account)}catch(e){x.e(e)}finally{x.f()}v=new Map,y=s()(p),t.prev=8,y.s();case 10:if((w=y.n()).done){t.next=20;break}return N=w.value,t.next=14,(0,h.zI)(o.client.v1.chain.get_account(N));case 14:g=t.sent,j=m()(g,2),(_=j[1])&&v.set(N,_);case 18:t.next=10;break;case 20:t.next=25;break;case 22:t.prev=22,t.t0=t.catch(8),y.e(t.t0);case 25:return t.prev=25,y.f(),t.finish(25);case 28:M=[],d.forEach((function(e){var t="NA",n="NA",r="NA",a="NA",c="NA",s="NA",o="NA";if(v.has(e.account)){var i=v.get(e.account);t=i.core_liquid_balance?i.core_liquid_balance.toString():"0.00000000 DFS",o=i.ram_quota.toNumber(),a=i.ram_usage.toNumber(),c=i.cpu_limit.max.toNumber(),n=i.cpu_limit.used.toNumber(),s=i.net_limit.max.toNumber(),r=i.net_limit.used.toNumber()}M.push(l()(l()({},e),{},{balance:t,cpuUsed:n,netUsed:r,ramUsed:a,cpuMax:c,netMax:s,ramMax:o}))})),S=[].concat(M,a()(f)),C=S.sort((function(e,t){return e.account.localeCompare(t.account)})),ee(-1),e(U.N.setDataSource(C)),r.success(Pe);case 35:case"end":return t.stop()}}),t,null,[[8,22,25,28]])})));return function(e,n){return t.apply(this,arguments)}}(),[u,o,re]),Be=(0,P.useCallback)((function(e,t){le.current.handleOpen(e,t)}),[]),Ee=(0,P.useCallback)((function(t){p[t]={isLock:!0,password:""},e(U.N.setLocks(l()({},p)))}),[p]),Qe=(0,P.useCallback)((function(){Object.keys(p).forEach((function(e){p[e]={isLock:!0,password:""}})),e(U.N.setLocks(l()({},p)))}),[p]),Ye=(0,P.useCallback)((function(e,t){pe.current.handleOpen(e,t)}),[]),He=(0,P.useCallback)((function(e,t){var n=p[e],r=u.find((function(t){return t.key===e}));if(n.isLock)le.current.handleOpen(e,t,[Ye]);else{var a=n.password,c=(0,h.ow)(r.privateKey,a);pe.current.handleOpen(t,c)}}),[p,u,Ye]),Ve=(0,P.useCallback)((function(e){var t=e.trim();if(E._I(t)){var n=t,r=E.Z1(n),a=W.fromSeed(r).derivePath("m/84'/0'/0'/0/0").privateKey.toString("hex"),c=Z.DX.privateKeyToString({type:Z.DX.KeyType.k1,data:Z.Y.hexToUint8Array(a)}),s=w._q.fromString(c),o=s.toPublic().toString();return{privateKey:s.toString(),publicKey:o}}var i=w._q.from(t),u=i.toPublic().toString();return{privateKey:i.toString(),publicKey:u}}),[]),We=(0,P.useCallback)(function(){var t=f()(i()().mark((function t(n){var a,c,o,u,d,f,p,x,b,k,v,y,w,N,g,j,_,M,S,C,A;return i()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.chain.id.toString(),t.next=3,(0,q.Q)(q.db.wallets.where("chainId").equals(a).toArray());case 3:if(c=t.sent,o=m()(c,2),u=o[0],d=o[1],!u){t.next=10;break}return r.error(u),t.abrupt("return",!1);case 10:f=new Set,p=s()(d);try{for(p.s();!(x=p.n()).done;)b=x.value,f.add(b.account)}catch(e){p.e(e)}finally{p.f()}k=1,O(!0),v=new Map,y=s()(f),t.prev=17,y.s();case 19:if((w=y.n()).done){t.next=30;break}return N=w.value,J("".concat(k++," / ").concat(f.size)),t.next=24,(0,h.zI)(n.client.v1.chain.get_account(N));case 24:g=t.sent,j=m()(g,2),(_=j[1])&&v.set(N,_);case 28:t.next=19;break;case 30:t.next=35;break;case 32:t.prev=32,t.t0=t.catch(17),y.e(t.t0);case 35:return t.prev=35,y.f(),t.finish(35);case 38:M=[],S={},d.forEach((function(e){var t="NA",n="NA",r="NA",a="NA",c="NA",s="NA",o="NA";if(v.has(e.account)){var i=v.get(e.account);t=i.core_liquid_balance?i.core_liquid_balance.toString():"0.00000000 DFS",o=i.ram_quota.toNumber(),a=i.ram_usage.toNumber(),c=i.cpu_limit.max.toNumber(),n=i.cpu_limit.used.toNumber(),s=i.net_limit.max.toNumber(),r=i.net_limit.used.toNumber()}M.push(l()(l()({},e),{},{balance:t,cpuUsed:n,netUsed:r,ramUsed:a,cpuMax:c,netMax:s,ramMax:o})),S[e.key]={isLock:!0,password:""}})),C=M.sort((function(e,t){return e.account.localeCompare(t.account)})),A=d.sort((function(e,t){return e.account.localeCompare(t.account)})),e(U.N.setDataSource(C)),e(U.N.setWallets(A)),e(U.N.setLocks(l()({},S))),ie(Array.from(f)),O(!1);case 48:case"end":return t.stop()}}),t,null,[[17,32,35,38]])})));return function(e){return t.apply(this,arguments)}}(),[]),Je=(0,P.useCallback)(function(){var t=f()(i()().mark((function t(n){var c;return i()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(c=new FileReader).readAsText(n.fileList[0].originFileObj),c.onload=f()(i()().mark((function t(){var n,f,x,b,k,v,y,w,N,g,j,_,M,S,C,Z,P,I;return i()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,n=/(\r\n|\n|\t)+/g,f=c.result.replace(n," "),!(x=JSON.parse(f))){t.next=44;break}b=new Set,k=new Map,v=[],y=[],w={},N=s()(x),t.prev=11,j=i()().mark((function e(){var t,n,a,c,s,u,l,d,f,p,x,N,j,_,M,S,C,Z,P,U,q,I,K,D,L,R,F;return i()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=g.value,n=t.password.trim(),a=t.account,c=t.permission,s=t.privatekey_mnemonic,u=Ve(s),l=u.privateKey,d=u.publicKey,f=o.chain.id.toString(),p=(0,A.js)("md5"),x=f+a+c+d,p.update(x),N=p.digest("hex").substring(0,8),!b.has(N)){e.next=13;break}return e.abrupt("return",0);case 13:if(b.add(N),j=void 0,!k.has(a)){e.next=19;break}j=k.get(a),e.next=29;break;case 19:return e.next=21,(0,h.zI)(o.client.v1.chain.get_account(a));case 21:if(_=e.sent,M=m()(_,2),S=M[0],C=M[1],!S){e.next=28;break}return r.error(S),e.abrupt("return",{v:!1});case 28:j=C;case 29:if(Z=j.permissions.find((function(e){return e.perm_name.toString()===c}))){e.next=35;break}return r.error(me.formatMessage({id:"tools.wallet.intlPermissionNotMatch"},{actor:a,permission:c})),e.abrupt("return",{v:!1});case 35:if(P=Z.required_auth.keys,P.find((function(e){return e.key.toString()===d}))){e.next=42;break}return r.error(me.formatMessage({id:"tools.wallet.intlPrivateKeyNotMatch"},{permissionLevel:"".concat(a,"@").concat(c)})),e.abrupt("return",{v:!1});case 42:U=(0,h.q6)(l,n),v.push({key:N,account:a,chainId:f,publicKey:d,permission:c,privateKey:U}),q=j.core_liquid_balance?j.core_liquid_balance.toString():"0.00000000 DFS",I=j.ram_quota.toNumber(),K=j.ram_usage.toNumber(),D=j.cpu_limit.max.toNumber(),L=j.cpu_limit.used.toNumber(),R=j.net_limit.max.toNumber(),F=j.net_limit.used.toNumber(),y.push({key:N,account:a,chainId:f,publicKey:d,permission:c,privateKey:U,balance:q,cpuUsed:L,netUsed:F,ramUsed:K,cpuMax:D,netMax:R,ramMax:I}),w[N]={isLock:!0,password:""};case 53:case"end":return e.stop()}}),e)})),N.s();case 14:if((g=N.n()).done){t.next=23;break}return t.delegateYield(j(),"t0",16);case 16:if(0!==(_=t.t0)){t.next=19;break}return t.abrupt("continue",21);case 19:if(!_){t.next=21;break}return t.abrupt("return",_.v);case 21:t.next=14;break;case 23:t.next=28;break;case 25:t.prev=25,t.t1=t.catch(11),N.e(t.t1);case 28:return t.prev=28,N.f(),t.finish(28);case 31:q.db.wallets.bulkPut(v),M=u.filter((function(e){return!b.has(e.key)})),S=d.filter((function(e){return!b.has(e.key)})),C=[].concat(a()(M),y),Z=[].concat(a()(S),v),P=C.sort((function(e,t){return e.account.localeCompare(t.account)})),I=Z.sort((function(e,t){return e.account.localeCompare(t.account)})),e(U.N.setDataSource(P)),e(U.N.setWallets(I)),e(U.N.setLocks(l()(l()({},p),w))),r.success("".concat(xe)),t.next=45;break;case 44:r.error("".concat(he));case 45:t.next=50;break;case 47:t.prev=47,t.t2=t.catch(0),(0,h.Tv)(t.t2,r);case 50:case"end":return t.stop()}}),t,null,[[0,47],[11,25,28,31]])})));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[Ve,o,u,d,p]),Xe=(0,P.useCallback)(f()(i()().mark((function e(){var t,n,a,c,s,u,l;return i()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.chain.id.toString(),e.next=3,(0,q.Q)(q.db.wallets.where("chainId").equals(t).toArray());case 3:if(n=e.sent,a=m()(n,2),c=a[0],s=a[1],!c){e.next=10;break}return r.error(c),e.abrupt("return",!1);case 10:u="data:,".concat(JSON.stringify(s,null,2)),(l=document.createElement("a")).href=u,l.download="wallets_".concat(Y()().format("YYYY-MM-DD_HH-mm"),".json"),l.click(),r.success(ge);case 16:case"end":return e.stop()}}),e)}))),[o]),Ge=(0,P.useCallback)(function(){var e=f()(i()().mark((function e(t){var n;return i()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=new FileReader).readAsText(t.fileList[0].originFileObj),n.onload=f()(i()().mark((function e(){var t,a;return i()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t=n.result,!(a=JSON.parse(t))){e.next=11;break}return e.next=6,q.db.wallets.bulkPut(a);case 6:return e.next=8,We(o);case 8:r.success(we),e.next=12;break;case 11:r.error(Ne);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),(0,h.Tv)(e.t0,r);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[o]),$e=(0,P.useCallback)(f()(i()().mark((function t(){var n,c,d,f,p,x,b,k,v,y,w,N,g,j,_,M,S;return i()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(re.length){t.next=3;break}return r.info(_e),t.abrupt("return",!1);case 3:n=u.filter((function(e){return re.includes(e.key)})),c=u.filter((function(e){return!re.includes(e.key)})),d=new Set,f=s()(n);try{for(f.s();!(p=f.n()).done;)x=p.value,d.add(x.account)}catch(e){f.e(e)}finally{f.f()}O(!0),b=1,k=new Map,v=s()(d),t.prev=12,v.s();case 14:if((y=v.n()).done){t.next=25;break}return w=y.value,J("".concat(b++," / ").concat(d.size)),t.next=19,(0,h.zI)(o.client.v1.chain.get_account(w));case 19:N=t.sent,g=m()(N,2),(j=g[1])&&k.set(w,j);case 23:t.next=14;break;case 25:t.next=30;break;case 27:t.prev=27,t.t0=t.catch(12),v.e(t.t0);case 30:return t.prev=30,v.f(),t.finish(30);case 33:_=[],n.forEach((function(e){var t="NA",n="NA",r="NA",a="NA",c="NA",s="NA",o="NA";if(k.has(e.account)){var i=k.get(e.account);t=i.core_liquid_balance?i.core_liquid_balance.toString():"0.00000000 DFS",o=i.ram_quota.toNumber(),a=i.ram_usage.toNumber(),c=i.cpu_limit.max.toNumber(),n=i.cpu_limit.used.toNumber(),s=i.net_limit.max.toNumber(),r=i.net_limit.used.toNumber()}_.push(l()(l()({},e),{},{balance:t,cpuUsed:n,netUsed:r,ramUsed:a,cpuMax:c,netMax:s,ramMax:o}))})),M=[].concat(_,a()(c)),S=M.sort((function(e,t){return e.account.localeCompare(t.account)})),e(U.N.setDataSource(S)),ae([]),O(!1);case 40:case"end":return t.stop()}}),t,null,[[12,27,30,33]])}))),[re,u]),et=(0,P.useCallback)(f()(i()().mark((function t(){var n,a,c,s,o;return i()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(re.length){t.next=3;break}return r.info(_e),t.abrupt("return",!1);case 3:return t.next=5,(0,q.Q)(q.db.wallets.bulkDelete(re));case 5:if(n=t.sent,a=m()(n,1),!(c=a[0])){t.next=11;break}return r.error(c),t.abrupt("return",!1);case 11:re.forEach((function(e){delete p[e]})),s=u.filter((function(e){return!re.includes(e.key)})),o=d.filter((function(e){return!re.includes(e.key)})),e(U.N.setDataSource(s)),e(U.N.setWallets(o)),e(U.N.setLocks(l()({},p))),ae([]),r.success(Ue);case 19:case"end":return t.stop()}}),t)}))),[re,u,d,p]),tt=(0,P.useMemo)((function(){return[{title:"#",dataIndex:"key",key:"key",fixed:!0,width:"10px",align:"center",render:function(e,t,n){return(0,V.jsx)("span",{children:n+1})}},{title:"".concat(Se),dataIndex:"account",key:"account",sorter:function(e,t){return t.account.localeCompare(e.account)},filters:oe.map((function(e){return{text:e,value:e}})),onFilter:function(e,t){return e===t.account},render:function(e,t){return(0,V.jsx)(g.Z,{placement:"top",title:t.publicKey,children:(0,V.jsx)("span",{children:t.account+"@"+t.permission})})}},{title:"".concat(Me),dataIndex:"balance",key:"balance",sorter:function(e,t){var n=Number(e.balance.split(" ")[0]);return Number(t.balance.split(" ")[0])-n},render:function(e,t){return(0,V.jsx)("span",{children:t.balance})}},{title:"".concat(Ce),dataIndex:"key",key:"key",render:function(e,t){return(0,V.jsxs)("div",{children:[(0,V.jsxs)("div",{children:["RAM: ",Fe(t.ramUsed)," / ",Fe(t.ramMax)]}),(0,V.jsxs)("div",{children:["CPU: ",Oe(t.cpuUsed)," /"," ",Oe(t.cpuMax)]}),(0,V.jsxs)("div",{children:["NET: ",Fe(t.netUsed)," / ",Fe(t.netMax)]})]})}},{title:"".concat(qe),dataIndex:"status",key:"status",align:"center",render:function(e,t){var n=t.account+"@"+t.permission;return(0,V.jsx)("div",{children:p[t.key].isLock?(0,V.jsx)(I.Z,{className:" text-xl text-yellow-500 cursor-pointer",onClick:function(){return Be(t.key,n)}}):(0,V.jsx)(K.Z,{className:" text-xl text-green-500 cursor-pointer",onClick:function(){return Ee(t.key)}})})}},{title:"".concat(Ae),dataIndex:"key",key:"key",render:function(e,t,n){var r=t.account+"@"+t.permission;return(0,V.jsxs)(j.Z,{children:[(0,V.jsx)(_.Z,{title:Ze,onConfirm:function(){return Te(t.key)},children:(0,V.jsx)("a",{children:(0,V.jsx)(D.Z,{className:"text-xl"})})}),(0,V.jsx)("a",{onClick:function(){return He(t.key,r)},children:(0,V.jsx)(T,{className:"text-xl"})}),$===n?(0,V.jsx)(M.Z,{className:"text-xl"}):-1===$?(0,V.jsx)("a",{onClick:function(){return ze(t.key,n)},children:(0,V.jsx)(z.Z,{className:"text-xl"})}):(0,V.jsx)("span",{children:(0,V.jsx)(z.Z,{className:"text-xl"})}),(0,V.jsx)(S.ZP,{type:"primary",className:"mb-1",onClick:function(){return de.current.handleOpen(t,n)},children:Ke}),(0,V.jsx)(S.ZP,{type:"primary",className:"mb-1",onClick:function(){return fe.current.handleOpen(t,n)},children:De})]})}}]}),[oe,Te,ze,p,$]);return(0,P.useEffect)((function(){o&&We(o)}),[We,o]),(0,V.jsxs)(b._z,{className:"wallet",ghost:!0,children:[(0,V.jsx)(k.Z,{scroll:{x:!0},size:"small",columns:tt,dataSource:u,defaultData:[],loading:{spinning:F,tip:H},search:!1,options:!1,pagination:!1,tableAlertRender:!1,tableAlertOptionRender:!1,headerTitle:(0,V.jsxs)("div",{children:[(0,V.jsx)("div",{className:"mb-3 text-red-600",children:Re}),(0,V.jsxs)(j.Z,{wrap:!0,className:"mb-[16px]",children:[(0,V.jsx)(S.ZP,{type:"primary",onClick:function(){return ue.current.handleOpen()},children:be}),(0,V.jsx)(C.Z,{accept:".json",maxCount:1,showUploadList:!1,onChange:Je,beforeUpload:function(){return!1},children:(0,V.jsx)(S.ZP,{type:"primary",children:ke})},"import"),(0,V.jsx)(S.ZP,{type:"primary",onClick:function(){return Xe()},children:ve}),(0,V.jsx)(C.Z,{accept:".json",maxCount:1,showUploadList:!1,onChange:Ge,beforeUpload:function(){return!1},children:(0,V.jsx)(S.ZP,{type:"primary",children:ye})},"restore"),(0,V.jsx)(S.ZP,{type:"primary",onClick:function(){return $e()},children:je}),(0,V.jsx)(S.ZP,{type:"primary",onClick:function(){return et()},children:Ie}),(0,V.jsx)(S.ZP,{type:"primary",onClick:function(){return Qe()},children:Le})]})]}),rowSelection:{type:"checkbox",selectedRowKeys:re,onChange:function(e){ae(e)}}}),(0,V.jsxs)(v.Z,{className:"mt-4 break-words",children:[(0,V.jsx)("div",{className:"mb-2 font-semibold",children:"批量导入说明："}),(0,V.jsx)("div",{children:"1. 文件类型必需是普通的文本文件"}),(0,V.jsx)("div",{children:"2. 标点符号必须为英文的标点符号"}),(0,V.jsx)("div",{children:"3. 组数最后一个记录不能有逗号,"}),(0,V.jsx)("div",{className:"mb-2 mt-2  font-semibold",children:"参考内容如下："}),(0,V.jsx)("div",{children:"["}),(0,V.jsx)("div",{className:"pl-3",children:'{ "account": "testaccount1", "permission": "owner", "privatekey_mnemonic": "PVT_K1_7uZRBrLrPy9sZh4uw39SpkxTEpSPoirHLQMnAjtfzXoC3FDc2", "password": "!qwer1234" },'}),(0,V.jsx)("div",{className:"pl-3",children:'{ "account": "testaccount1", "permission": "active", "privatekey_mnemonic": "guess spice corn sketch monitor horror crime better quick noble castle alert", "password": "!qwer1234" },'}),(0,V.jsx)("div",{className:"pl-3",children:'{ "account": "testaccount2", "permission": "owner", "privatekey_mnemonic": "5HwC96dwRJxxQswy77NwEVZtB44jeXfoa6QBaxDV8YrAxmhwipo", "password": "!qwer1234" }'}),(0,V.jsx)("div",{children:"]"})]}),(0,V.jsx)(x.cF,{ref:ue,messageApi:r}),(0,V.jsx)(x.sI,{ref:le,messageApi:r}),(0,V.jsx)(x.ql,{ref:de,messageApi:r,handleUpdate:ze}),(0,V.jsx)(x.Tk,{ref:fe,messageApi:r,handleUpdate:ze}),(0,V.jsx)(x.dN,{ref:pe}),c]})}},64599:function(e,t,n){var r=n(96263);e.exports=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=r(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0,c=function(){};return{s:c,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,o=!0,i=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){i=!0,s=e},f:function(){try{o||null==n.return||n.return()}finally{if(i)throw s}}}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);