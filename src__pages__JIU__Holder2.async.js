"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[615],{6466:function(t,e,n){n.d(e,{Z:function(){return y}});var a=n(4942),r=n(1413),s=n(91),c=n(28459),i=n(93967),o=n.n(i),l=n(62435),u=n(63330),d=n(44962),p=n(98082),f=function(t){return(0,a.Z)({},t.componentCls,{display:"flex",flexDirection:"column",justifyContent:"flex-end",marginBlock:t.marginLG,marginInline:0,color:t.colorText,fontWeight:"500",fontSize:"20px",lineHeight:"38px"})};var h=n(86074),x=function(t){var e=t.className,n=t.style,a=void 0===n?{}:n,s=t.children,i=(0,(0,l.useContext)(c.ZP.ConfigContext).getPrefixCls)("pro-card-operation"),u=function(t){return(0,p.Xj)("ProCardOperation",(function(e){var n=(0,r.Z)((0,r.Z)({},e),{},{componentCls:".".concat(t)});return[f(n)]}))}(i),d=u.wrapSSR,x=u.hashId,m=o()(i,e,x);return d((0,h.jsx)("div",{className:m,style:a,children:s}))},m=n(10357),v=function(t){return(0,a.Z)({},t.componentCls,{"&-chart":{display:"flex",flexDirection:"column",marginBlockStart:8,marginBlockEnd:8,"&-left":{marginBlockStart:0,marginInlineEnd:"16px"},"&-right":{marginBlockStart:0,marginInlineStart:"16px"}},"&-content":{display:"flex",flexDirection:"column","&-horizontal":(0,a.Z)({flexDirection:"row"},"".concat(t.componentCls,"-chart"),{alignItems:"center",alignSelf:"flex-start"})},"&-footer":{marginBlockStart:8,paddingBlockStart:"16px",borderBlockStart:"rgba(0, 0, 0, 0.08) solid ".concat(t.colorBorder)}})};var g=["children","statistic","className","chart","chartPlacement","footer"],k=function(t){var e,n=t.children,i=t.statistic,d=t.className,f=t.chart,x=t.chartPlacement,k=t.footer,y=(0,s.Z)(t,g),j=(0,(0,l.useContext)(c.ZP.ConfigContext).getPrefixCls)("pro-statistic-card"),Z=function(t){return(0,p.Xj)("StatisticCard",(function(e){var n=(0,r.Z)((0,r.Z)({},e),{},{componentCls:".".concat(t)});return[v(n)]}))}(j),C=Z.wrapSSR,S=Z.hashId,b=o()(j,d,S),w=i&&(0,h.jsx)(m.Z,(0,r.Z)({layout:"vertical"},i)),N=o()("".concat(j,"-chart"),S,(e={},(0,a.Z)(e,"".concat(j,"-chart-left"),"left"===x&&f&&i),(0,a.Z)(e,"".concat(j,"-chart-right"),"right"===x&&f&&i),e)),I=f&&(0,h.jsx)("div",{className:N,children:f}),P=o()("".concat(j,"-content "),S,(0,a.Z)({},"".concat(j,"-content-horizontal"),"left"===x||"right"===x)),B=(I||w)&&("left"===x?(0,h.jsxs)("div",{className:P,children:[I,w]}):(0,h.jsxs)("div",{className:P,children:[w,I]})),E=k&&(0,h.jsx)("div",{className:"".concat(j,"-footer ").concat(S).trim(),children:k});return C((0,h.jsxs)(u.Z,(0,r.Z)((0,r.Z)({className:b},y),{},{children:[B,n,E]})))};k.Statistic=m.Z,k.Divider=d.Z,k.Operation=x,k.isProCard=!0,k.Group=function(t){return(0,h.jsx)(k,(0,r.Z)({bodyStyle:{padding:0}},t))};var y=k},10357:function(t,e,n){n.d(e,{Z:function(){return g}});var a=n(1413),r=n(4942),s=n(91),c=n(25035),i=n(28459),o=n(83062),l=n(40411),u=n(55054),d=n(93967),p=n.n(d),f=n(62435),h=n(98082),x=function(t){var e,n,a;return(0,r.Z)({},t.componentCls,(a={display:"flex",fontSize:t.fontSize,"& + &":{marginBlockStart:4},"&-tip":{marginInlineStart:4},"&-wrapper":(0,r.Z)({display:"flex",width:"100%"},"".concat(t.componentCls,"-status"),{width:"14px"}),"&-icon":{marginInlineEnd:16},"&-trend-icon":{width:0,height:0,borderInlineEnd:"3.5px solid transparent",borderBlockEnd:"9px solid #000",borderInlineStart:"3.5px solid transparent","&-up":{transform:"rotate(0deg)"},"&-down":{transform:"rotate(180deg)"}},"&-content":(0,r.Z)({width:"100%"},"".concat(t.antCls,"-statistic-content"),{"&-value-int":{fontSize:t.fontSizeHeading3}}),"&-description":{width:"100%"}},(0,r.Z)(a,"".concat(t.antCls,"-statistic-title"),{color:t.colorText}),(0,r.Z)(a,"&-trend-up",(0,r.Z)({},"".concat(t.antCls,"-statistic-content"),(0,r.Z)({color:"#f5222d"},"".concat(t.componentCls,"-trend-icon"),{borderBlockEndColor:"#f5222d"}))),(0,r.Z)(a,"&-trend-down",(0,r.Z)({},"".concat(t.antCls,"-statistic-content"),(0,r.Z)({color:"#389e0d"},"".concat(t.componentCls,"-trend-icon"),{borderBlockEndColor:"#52c41a"}))),(0,r.Z)(a,"& &-layout-horizontal",(e={display:"flex",justifyContent:"space-between"},(0,r.Z)(e,"".concat(t.antCls,"-statistic-title"),{marginBlockEnd:0}),(0,r.Z)(e,"".concat(t.antCls,"-statistic-content-value"),{fontWeight:500}),(0,r.Z)(e,"".concat(t.antCls,"-statistic-title,").concat(t.antCls,"-statistic-content,").concat(t.antCls,"-statistic-content-suffix,").concat(t.antCls,"-statistic-content-prefix,").concat(t.antCls,"-statistic-content-value-decimal"),{fontSize:t.fontSize}),e)),(0,r.Z)(a,"& &-layout-inline",(n={display:"inline-flex",color:t.colorTextSecondary},(0,r.Z)(n,"".concat(t.antCls,"-statistic-title"),{marginInlineEnd:"6px",marginBlockEnd:0}),(0,r.Z)(n,"".concat(t.antCls,"-statistic-content"),{color:t.colorTextSecondary}),(0,r.Z)(n,"".concat(t.antCls,"-statistic-title,").concat(t.antCls,"-statistic-content,").concat(t.antCls,"-statistic-content-suffix,").concat(t.antCls,"-statistic-content-prefix,").concat(t.antCls,"-statistic-content-value-decimal"),{fontSize:t.fontSizeSM}),n)),a))};var m=n(86074),v=["className","layout","style","description","children","title","tip","status","trend","prefix","icon"],g=function(t){var e,n=t.className,d=t.layout,g=void 0===d?"inline":d,k=t.style,y=t.description,j=(t.children,t.title),Z=t.tip,C=t.status,S=t.trend,b=t.prefix,w=t.icon,N=(0,s.Z)(t,v),I=(0,(0,f.useContext)(i.ZP.ConfigContext).getPrefixCls)("pro-card-statistic"),P=function(t){return(0,h.Xj)("Statistic",(function(e){var n=(0,a.Z)((0,a.Z)({},e),{},{componentCls:".".concat(t)});return[x(n)]}))}(I),B=P.wrapSSR,E=P.hashId,M=p()(I,n,E),z=p()("".concat(I,"-status"),E),D=p()("".concat(I,"-icon"),E),O=p()("".concat(I,"-wrapper"),E),q=p()("".concat(I,"-content"),E),R=p()(E,(e={},(0,r.Z)(e,"".concat(I,"-layout-").concat(g),g),(0,r.Z)(e,"".concat(I,"-trend-").concat(S),S),e)),F=Z&&(0,m.jsx)(o.Z,{title:Z,children:(0,m.jsx)(c.Z,{className:"".concat(I,"-tip ").concat(E).trim()})}),T=p()("".concat(I,"-trend-icon"),E,(0,r.Z)({},"".concat(I,"-trend-icon-").concat(S),S)),U=S&&(0,m.jsx)("div",{className:T}),H=C&&(0,m.jsx)("div",{className:z,children:(0,m.jsx)(l.Z,{status:C,text:null})}),L=w&&(0,m.jsx)("div",{className:D,children:w});return B((0,m.jsxs)("div",{className:M,style:k,children:[L,(0,m.jsxs)("div",{className:O,children:[H,(0,m.jsxs)("div",{className:q,children:[(0,m.jsx)(u.Z,(0,a.Z)({title:(j||F)&&(0,m.jsxs)(m.Fragment,{children:[j,F]}),prefix:(U||b)&&(0,m.jsxs)(m.Fragment,{children:[U,b]}),className:R},N)),y&&(0,m.jsx)("div",{className:"".concat(I,"-description ").concat(E).trim(),children:y})]})]})]}))}},15481:function(t,e,n){n.r(e),n.d(e,{default:function(){return B}});var a=n(15009),r=n.n(a),s=n(99289),c=n.n(s),i=n(5574),o=n.n(i),l=n(81876),u=n(31120),d=n(64119),p=n(11774),f=n(38345),h=n(6466),x=n(92340),m=n(59530),v=n(45360),g=n(71230),k=n(15746),y=n(15867),j=n(9669),Z=n.n(j),C=n(55835),S=n(27484),b=n.n(S),w=n(70178),N=n.n(w),I=n(62435),P=n(86074);b().extend(N());var B=function(){var t=(0,m.useDispatch)(),e=v.ZP.useMessage(),n=o()(e,2),a=n[0],s=n[1],i=(0,m.useNavigate)(),j=(0,m.useSelector)((function(t){return t.global.contractKit})),S=(0,I.useState)(!1),b=o()(S,2),w=b[0],N=b[1],B=(0,m.useSelector)((function(t){return t.jiu.holderDataSource})),E=(0,m.useSelector)((function(t){return t.jiu.holderDataSourceReset})),M=(0,I.useState)(0),z=o()(M,2),D=z[0],O=z[1],q=(0,I.useState)(0),R=o()(q,2),F=R[0],T=R[1],U=(0,I.useState)(0),H=o()(U,2),L=H[0],_=H[1],A=(0,I.useState)(0),W=o()(A,2),J=W[0],X=W[1],$=(0,m.useIntl)(),G=$.formatMessage({id:"jiu.intlMissingData"}),K=$.formatMessage({id:"jiu.intlHolder"}),V=$.formatMessage({id:"jiu.intlHold"}),Q=$.formatMessage({id:"jiu.intlLiq"}),Y=$.formatMessage({id:"jiu.intlTotalValue"}),tt=$.formatMessage({id:"jiu.intlRatio"}),et=$.formatMessage({id:"jiu.intlSupply"}),nt=$.formatMessage({id:"jiu.intlMarketCap"}),at=$.formatMessage({id:"jiu.intlDestruction"}),rt=$.formatMessage({id:"jiu.intlPrice"}),st=$.formatMessage({id:"jiu.intlRank"}),ct=$.formatMessage({id:"jiu.intlUpdate"}),it=$.formatMessage({id:"jiu.intlTotalBal"}),ot=(0,I.useCallback)(c()(r()().mark((function t(){var e,n,s,c,i,l,p,f,h,x,m,v,g,k,y,j,S,b,w,N,I,P,B,E,M,z,D,O,q;return r()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="jiutokenmain",n="000d9cae502dd1cc895745e204f83cc892bc4c450f92a03ecd4fe057709853cc",s=(0,C.js)("md5"),c=n+e,s.update(c),i=s.digest("hex").substring(0,8),l={key:i,chainId:n,account:e,skip:0,lastUpdate:"2020-01-01T01:01:01.000Z",error:!1,data:[]},t.next=9,u.db.txList.where({key:i}).toArray();case 9:(p=t.sent).length&&(l=p[0]),f=[],h=500,x=l.lastUpdate,m=l.skip;case 15:return t.next=18,(0,d.zI)(Z().get("https://api2.dfsmoon.com/v2/history/get_actions?track=true&sort=asc&simple=true&noBinary=true&account=".concat(e,"&after=").concat(x,"&limit=").concat(h)));case 18:if(v=t.sent,g=o()(v,2),k=g[0],y=g[1],k||200!==y.status){t.next=65;break}if(j=y.data.simple_actions,S=j.length,b=y.data.total.value,w=1,0!==b){t.next=30;break}return u.db.txList.put(l),t.abrupt("return",l.data);case 30:for(N=0;N<j.length;N++)m<=N&&f.push(j[N]);if(f.length){t.next=34;break}return l.error&&a.error(G),t.abrupt("return",l.data);case 34:I=f.length-1;case 35:if(!(I>0)){t.next=44;break}if(f[I].transaction_id!==f[I-1].transaction_id){t.next=40;break}w+=1,t.next=41;break;case 40:return t.abrupt("break",44);case 41:I--,t.next=35;break;case 44:if(m=w,S!==h){t.next=50;break}P=f[f.length-1].timestamp,x=P,t.next=63;break;case 50:return f.forEach((function(t){l.data.push(t)})),B=f[f.length-1].timestamp,l.lastUpdate=B,l.skip=m,t.next=56,(0,d.zI)(Z().get("https://api2.dfsmoon.com/v2/history/get_actions?track=true&simple=true&noBinary=true&account=".concat(e,"&skip=0&limit=1")));case 56:return E=t.sent,M=o()(E,2),z=M[0],D=M[1],z||200!==D.status?a.error(z):(O=D.data.total.value,l.data.length!==O?(l.error=!0,a.error(G)):l.error=!1),u.db.txList.put(l),t.abrupt("return",l.data);case 63:t.next=69;break;case 65:return f.length&&(f.forEach((function(t){l.data.push(t)})),q=f[f.length-1].timestamp,l.lastUpdate=q,l.skip=m,l.error=!0),u.db.txList.put(l),a.error(k),t.abrupt("return",l.data);case 69:t.next=15;break;case 71:case"end":return t.stop()}}),t)}))),[a]),lt=(0,I.useCallback)(c()(r()().mark((function t(){var e,n,a,s,c,i,o;return r()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.load("swapswapswap");case 2:return e=t.sent,n=e.table("markets"),t.next=6,n.all();case 6:return a=t.sent,s=a.find((function(t){return 24===t.mid.toNumber()})),"usdtusdtusdt-USDT",i="eosio.token-DFS",o=[],(c={})["usdtusdtusdt-USDT"]=1,c[i]=a[0].reserve0.value/a[0].reserve1.value,a.forEach((function(t){var e=t.contract0.toString()+"-"+t.sym0.toString().split(",")[1],n=t.contract1.toString()+"-"+t.sym1.toString().split(",")[1];"eosio.token"===t.contract0.toString()?c.hasOwnProperty(n)||(c[n]=t.reserve0.value/t.reserve1.value*c[i]):"eosio.token"===t.contract1.toString()?c.hasOwnProperty(e)||(c[e]=t.reserve1.value/t.reserve0.value*c[i]):"usdtusdtusdt"===t.contract0.toString()?c.hasOwnProperty(n)||(c[n]=t.reserve0.value/t.reserve1.value):"usdtusdtusdt"===t.contract1.toString()?c.hasOwnProperty(e)||(c[e]=t.reserve1.value/t.reserve0.value):o.push({key0:e,key1:n,value0:t.reserve0.value,value1:t.reserve1.value})})),o.forEach((function(t){c.hasOwnProperty(t.key0)&&!c.hasOwnProperty(t.key1)?c[t.key1]=t.value0/t.value1*c[t.key0]:!c.hasOwnProperty(t.key0)&&c.hasOwnProperty(t.key1)?c[t.key0]=t.value1/t.value0*c[t.key1]:c.hasOwnProperty(t.key0)||c.hasOwnProperty(t.key1)||(c[t.key0]=0,c[t.key1]=0)})),t.abrupt("return",{tokenPriceMap:c,market24:s});case 17:case"end":return t.stop()}}),t)}))),[j]),ut=(0,I.useCallback)(c()(r()().mark((function t(){var e,n,a;return r()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.load("swapswapswap");case 2:return e=t.sent,n=e.table("liquidity"),t.next=6,n.all({scope:24});case 6:return a=t.sent,t.abrupt("return",a);case 8:case"end":return t.stop()}}),t)}))),[j]),dt=(0,I.useCallback)(c()(r()().mark((function e(){var n,s,c,i,o,u,p,f,h,x,m;return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={jiuissuemain:1e15},s={},c=[],e.next=6,lt();case 6:return i=e.sent,o=i.tokenPriceMap,u=i.market24,e.next=11,ot();case 11:return p=e.sent,e.next=14,ut();case 14:for(f=e.sent,h=0,p.forEach((function(t){if("jiutokenmain"===t.contract&&"transfer"===t.action){var e=t.data.from,a=t.data.to,r=parseInt((1e4*t.data.amount).toFixed(0)),s=t.data.memo;"swapswapswap"!==e||"extra deposit refund"!==s&&"withdraw token1 liquidity"!==s&&"swap success"!==s?"swapswapswap"!==a||"deposit:24"!==s&&!s.startsWith("swap:24")?n.hasOwnProperty(a)?(n[a]+=r,n[e]-=r):(n[a]=r,n[e]-=r):(n[a]+=0,n[e]-=r):(n[e]-=0,n.hasOwnProperty(a)?n[a]+=r:n[a]=r)}else if("jiutokenmain"===t.contract&&"retire"===t.action){var c=parseInt((1e4*Number(t.data.quantity.split(" ")[0])).toFixed(0));n.jiuissuemain-=c,h+=c}})),f.forEach((function(t){var e=parseFloat(u.liquidity_token.toString()),n=parseFloat(u.reserve1.value.toString())*(parseFloat(t.token.toString())/e),a=t.owner.toString();s[a]=n})),Object.keys(n).forEach((function(t,e){var a=n[t]/1e4,r=s[t]?s[t]:0;a+r>0&&c.push({key:e,rank:e,account:t,hold:a,liq:r,totalBal:a+r,value:(a+r)*o["jiutokenmain-JIU"],ratio:(a+r)/(1e11-h/1e4)})})),x=c.sort((function(t,e){return e.value-t.value})),m=0;m<x.length;m++)x[m].rank=m;t(l.N.setHolderDataSource(x)),t(l.N.setHolderDataSourceReset(x)),O(x.length),T((1e11-h/1e4)*o["jiutokenmain-JIU"]),_(h/1e4),X(o["jiutokenmain-JIU"]),N(!1),e.next=34;break;case 30:e.prev=30,e.t0=e.catch(0),N(!1),(0,d.Tv)(e.t0,a);case 34:case"end":return e.stop()}}),e,null,[[0,30]])}))),[ot,lt]),pt=(0,I.useCallback)((function(e){var n=e.account,a=B.filter((function(t){return t.account===n}));t(l.N.setHolderDataSource(a))}),[B]),ft=(0,I.useCallback)((function(){t(l.N.setHolderDataSource(E))}),[E]),ht=(0,I.useMemo)((function(){return[{title:"".concat(st),dataIndex:"key",key:"key",search:!1,render:function(t,e){return(0,P.jsx)("span",{children:e.rank+1})}},{title:"".concat(K),dataIndex:"account",key:"account",render:function(t,e){var n="";return"crowdfunding"===e.account?n="众筹LP，永不撤市":"jiuoperation"===e.account?n="社区公共基金":"jiutothemoon"===e.account&&(n="韭菜天团DAO"),(0,P.jsxs)("a",{onClick:function(){return i("/query/account?search=".concat(e.account,"&tab=info"))},children:[e.account,(0,P.jsx)("div",{className:" text-red-600",children:n})]})}},{title:"".concat(V),dataIndex:"hold",key:"hold",search:!1,sorter:function(t,e){return e.hold-t.hold},render:function(t,e){return(0,P.jsx)("span",{children:(0,d.CE)(e.hold)})}},{title:"".concat(Q),dataIndex:"liq",key:"liq",search:!1,sorter:function(t,e){return e.liq-t.liq},render:function(t,e){return(0,P.jsx)("span",{children:(0,d.CE)(e.liq)})}},{title:"".concat(it),dataIndex:"totalBal",key:"totalBal",search:!1,sorter:function(t,e){return e.totalBal-t.totalBal},render:function(t,e){return(0,P.jsx)("span",{children:(0,d.CE)(e.totalBal)})}},{title:"".concat(Y),dataIndex:"value",key:"value",search:!1,sorter:function(t,e){return e.value-t.value},render:function(t,e){return(0,P.jsx)("span",{children:(0,d.CE)(e.value,"$")})}},{title:"".concat(tt),dataIndex:"ratio",key:"ratio",search:!1,sorter:function(t,e){return e.ratio-t.ratio},render:function(t,e){return(0,P.jsxs)("span",{children:[(0,d.CE)(100*e.ratio),"%"]})}}]}),[]);return(0,I.useEffect)((function(){j?(B.length?N(!1):N(!0),dt()):N(!0)}),[j,dt]),(0,P.jsxs)(p._z,{className:"holder",ghost:!0,children:[(0,P.jsx)(f.Z,{headerBordered:!0,headStyle:{justifyContent:"center"},className:"mb-3",children:(0,P.jsxs)(g.Z,{gutter:10,children:[(0,P.jsx)(k.Z,{lg:{span:"6"},md:{span:"12"},sm:{span:"24"},xs:{span:"24"},children:(0,P.jsx)(h.Z,{layout:"center",statistic:{title:(0,P.jsx)("div",{className:"text-center",children:nt}),value:(0,d.CE)(F,"$")}})}),(0,P.jsx)(k.Z,{lg:{span:"4"},md:{span:"12"},sm:{span:"12"},xs:{span:"12"},children:(0,P.jsx)(h.Z,{layout:"center",statistic:{title:(0,P.jsx)("div",{className:"text-center",children:et}),value:"".concat(((1e11-L)/1e8).toFixed(2),"亿")}})}),(0,P.jsx)(k.Z,{lg:{span:"5"},md:{span:"8"},sm:{span:"12"},xs:{span:"12"},children:(0,P.jsx)(h.Z,{layout:"center",statistic:{title:(0,P.jsx)("div",{className:"text-center",children:at}),value:"".concat((L/1e8).toFixed(2),"亿(").concat((L/1e11*100).toFixed(2),"%)")}})}),(0,P.jsx)(k.Z,{lg:{span:"5"},md:{span:"8"},sm:{span:"12"},xs:{span:"12"},children:(0,P.jsx)(h.Z,{layout:"center",statistic:{title:(0,P.jsx)("div",{className:"text-center",children:rt}),value:(0,d.CE)(J,"$")}})}),(0,P.jsx)(k.Z,{lg:{span:"4"},md:{span:"8"},sm:{span:"12"},xs:{span:"12"},children:(0,P.jsx)(h.Z,{layout:"center",statistic:{title:(0,P.jsx)("div",{className:"text-center",children:K}),value:D}})})]})}),(0,P.jsx)(x.Z,{className:"mb-3",scroll:{x:!0},size:"small",columns:ht,dataSource:B,defaultData:[],search:{defaultCollapsed:!1,layout:"horizontal",labelWidth:"auto",collapseRender:!1,className:"p-[0px]",optionRender:function(t,e,n){return[n[1],(0,P.jsx)(y.ZP,{onClick:function(){N(!0),dt()},children:ct},"update"),n[0]]}},onSubmit:pt,onReset:ft,options:!1,pagination:{pageSize:100},tableAlertRender:!1,tableAlertOptionRender:!1,loading:{spinning:w,size:"large"}}),s]})}}}]);