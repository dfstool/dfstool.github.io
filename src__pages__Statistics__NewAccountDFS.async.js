"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9758],{80652:function(t,e,a){var r=a(62435),s=a(20701),n=a(11924),c=a(79360),i=a(24770),o=a(79642),l=function(t,e){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(a[r[s]]=t[r[s]])}return a},u=(0,r.forwardRef)((function(t,e){var a=t.chartRef,u=t.style,d=void 0===u?{height:"inherit"}:u,p=t.className,f=t.loading,m=t.loadingTemplate,h=t.errorTemplate,y=l(t,["chartRef","style","className","loading","loadingTemplate","errorTemplate"]),g=(0,n.Z)(s.x1,y),b=g.chart,x=g.container;return(0,r.useEffect)((function(){(0,c.J)(a,b.current)}),[b.current]),(0,r.useImperativeHandle)(e,(function(){return{getChart:function(){return b.current}}})),r.createElement(i.Z,{errorTemplate:h},f&&r.createElement(o.Z,{loadingTemplate:m,theme:t.theme}),r.createElement("div",{className:p,style:d,ref:x}))}));e.Z=u},93028:function(t,e,a){a.r(e);var r=a(97857),s=a.n(r),n=a(15009),c=a.n(n),i=a(99289),o=a.n(i),l=a(5574),u=a.n(l),d=a(5621),p=a(31120),f=a(64119),m=a(80652),h=a(11774),y=a(38345),g=a(59530),b=a(45360),x=a(57953),k=a(32983),v=a(9669),E=a.n(v),S=a(55835),M=a(27484),j=a.n(M),Z=a(70178),w=a.n(Z),A=a(62435),D=a(86074);j().extend(w());e.default=function(){var t=(0,g.useDispatch)(),e=b.ZP.useMessage(),a=u()(e,2),r=a[0],n=a[1],i=(0,A.useState)(!1),l=u()(i,2),v=l[0],M=l[1],Z=(0,g.useSelector)((function(t){return t.statistics.dailyAccountDataSource})),w=(0,g.useSelector)((function(t){return t.statistics.weeklyAccountDataSource})),O=(0,g.useSelector)((function(t){return t.statistics.monthlyAccountDataSource})),N=(0,g.useIntl)(),P=N.formatMessage({id:"statistics.intlMissingData"}),I=N.formatMessage({id:"statistics.intlDailyAccount"}),_=N.formatMessage({id:"statistics.intlDailyAccountSum"}),T=N.formatMessage({id:"statistics.intlWeeklyAccount"}),F=N.formatMessage({id:"statistics.intlWeeklyAccountSum"}),L=N.formatMessage({id:"statistics.intlMonthlyAccount"}),R=N.formatMessage({id:"statistics.intlMonthlyAccountSum"}),C=(0,A.useCallback)(o()(c()().mark((function t(){var e,a,s,n,i,o,l,d,m,h,y,g,b,x,k,v,M,j,Z,w,A,D,O,N,I,_,T,F,L;return c()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="eosio:newaccount",a="000d9cae502dd1cc895745e204f83cc892bc4c450f92a03ecd4fe057709853cc",s=(0,S.js)("md5"),n=a+e,s.update(n),i=s.digest("hex").substring(0,8),o={key:i,chainId:a,account:e,skip:0,lastUpdate:"2020-01-01T01:01:01.000Z",error:!1,data:[]},t.next=9,p.db.txList.where({key:i}).toArray();case 9:(l=t.sent).length&&(o=l[0]),d=[],m=500,h=o.lastUpdate,y=o.skip;case 15:return t.next=18,(0,f.zI)(E().get("https://api2.dfsmoon.com/v2/history/get_actions?track=true&sort=asc&simple=true&noBinary=true&account=".concat(e.split(":")[0],"&after=").concat(h,"&limit=").concat(m,"&filter=").concat(e)));case 18:if(g=t.sent,b=u()(g,2),x=b[0],k=b[1],x||200!==k.status){t.next=65;break}if(v=k.data.simple_actions,M=v.length,j=k.data.total.value,Z=1,0!==j){t.next=30;break}return p.db.txList.put(o),t.abrupt("return",o.data);case 30:for(w=0;w<v.length;w++)y<=w&&d.push(v[w]);if(d.length){t.next=34;break}return o.error&&r.error(P),t.abrupt("return",o.data);case 34:A=d.length-1;case 35:if(!(A>0)){t.next=44;break}if(d[A].transaction_id!==d[A-1].transaction_id){t.next=40;break}Z+=1,t.next=41;break;case 40:return t.abrupt("break",44);case 41:A--,t.next=35;break;case 44:if(y=Z,M!==m){t.next=50;break}D=d[d.length-1].timestamp,h=D,t.next=63;break;case 50:return d.forEach((function(t){o.data.push(t)})),O=d[d.length-1].timestamp,o.lastUpdate=O,o.skip=y,t.next=56,(0,f.zI)(E().get("https://api2.dfsmoon.com/v2/history/get_actions?track=true&simple=true&noBinary=true&account=".concat(e.split(":")[0],"&skip=0&limit=1&filter=").concat(e)));case 56:return N=t.sent,I=u()(N,2),_=I[0],T=I[1],_||200!==T.status?r.error(_):(F=T.data.total.value,o.data.length!==F?(o.error=!0,r.error(P)):o.error=!1),p.db.txList.put(o),t.abrupt("return",o.data);case 63:t.next=69;break;case 65:return d.length&&(d.forEach((function(t){o.data.push(t)})),L=d[d.length-1].timestamp,o.lastUpdate=L,o.skip=y,o.error=!0),p.db.txList.put(o),r.error(x),t.abrupt("return",o.data);case 69:t.next=15;break;case 71:case"end":return t.stop()}}),t)}))),[r]),z=(0,A.useCallback)(o()(c()().mark((function e(){var a,s,n,i,o,l,u,p,m,h;return c()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=[],s=[],n=[],e.next=6,C();case 6:i=e.sent,o={},l={},u={},p=0,m=0,h=0,i.forEach((function(t){var e=j().utc(t.timestamp).local().format().slice(0,10),a=j().utc(t.timestamp).local().format("YYYY-ww"),r=j().utc(t.timestamp).local().format().slice(0,7);o.hasOwnProperty(e)?o[e]+=1:o[e]=1,l.hasOwnProperty(a)?l[a]+=1:l[a]=1,u.hasOwnProperty(r)?u[r]+=1:u[r]=1})),o["2024-01-01"]+=9,l["2024-01"]+=9,u["2024-01"]+=9,Object.keys(o).forEach((function(t){p+=o[t],a.push({day:t,value:o[t],category:I}),a.push({day:t,value:p,category:_})})),Object.keys(l).forEach((function(t){m+=l[t],s.push({day:t,value:l[t],category:T}),s.push({day:t,value:m,category:F})})),Object.keys(u).forEach((function(t){h+=u[t],n.push({day:t,value:u[t],category:L}),n.push({day:t,value:h,category:R})})),t(d.N.setDailyAccountDataSource(a)),t(d.N.setWeeklyAccountDataSource(s)),t(d.N.setMonthlyAccountDataSource(n)),M(!1),e.next=30;break;case 26:e.prev=26,e.t0=e.catch(0),M(!1),(0,f.Tv)(e.t0,r);case 30:case"end":return e.stop()}}),e,null,[[0,26]])}))),[C]),U={data:Z,xField:"day",xAxis:{type:"time",mask:"MM-DD"},yField:"value",seriesField:"category",slider:{start:0,end:1},smooth:!0,label:{}},Y={data:w,xField:"day",yField:"value",seriesField:"category",slider:{start:0,end:1},smooth:!0,label:{}},G={data:O,xField:"day",yField:"value",seriesField:"category",slider:{start:0,end:1},smooth:!0,label:{}};return(0,A.useEffect)((function(){Z.length?M(!1):M(!0),z()}),[z]),(0,D.jsxs)(h._z,{className:"",ghost:!0,children:[(0,D.jsxs)(x.Z,{size:"large",spinning:v,children:[(0,D.jsx)(y.Z,{className:"mb-3",children:Z.length?(0,D.jsx)(m.Z,s()(s()({},U),{},{loading:v})):(0,D.jsx)(k.Z,{image:k.Z.PRESENTED_IMAGE_SIMPLE})}),(0,D.jsx)(y.Z,{className:"mb-3",children:w.length?(0,D.jsx)(m.Z,s()(s()({},Y),{},{loading:v})):(0,D.jsx)(k.Z,{image:k.Z.PRESENTED_IMAGE_SIMPLE})}),(0,D.jsx)(y.Z,{className:"mb-3",children:O.length?(0,D.jsx)(m.Z,s()(s()({},G),{},{loading:v})):(0,D.jsx)(k.Z,{image:k.Z.PRESENTED_IMAGE_SIMPLE})})]}),n]})}}}]);