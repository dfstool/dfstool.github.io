"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2761],{5418:function(e,l,n){n.r(l);var t=n(15009),c=n.n(t),o=n(99289),i=n.n(o),a=n(5574),u=n.n(a),r=n(38345),s=n(97269),d=n(5966),S=n(59530),p=n(27484),m=n.n(p),f=n(70178),x=n.n(f),H=n(62435),M=(n(91885),n(86074));m().extend(x());l.default=function(){var e=(0,H.useState)({utc:"",utcISO:"",utcISOMilliSecond:"",localTime:"",unixSecond:""}),l=u()(e,2),n=l[0],t=l[1],o=(0,H.useState)({utcHelp:"",utcISOHelp:"",utcISOMilliSecondHelp:"",localTimeHelp:"",unixSecondHelp:"",unixMilliSecondHelp:""}),a=u()(o,2),p=a[0],f=a[1],x=(0,H.useRef)(),h=(0,S.useIntl)(),v=h.formatMessage({id:"timeconvert.intlUTCTime"}),I=h.formatMessage({id:"timeconvert.intlUTCISO"}),O=h.formatMessage({id:"timeconvert.intlUTCISOMilliSecond"}),T=h.formatMessage({id:"timeconvert.intlLocalTime"}),C=h.formatMessage({id:"timeconvert.intlUnixSecond"}),Y=h.formatMessage({id:"timeconvert.intlUnixMilliSecond"}),g=h.formatMessage({id:"common.intlInputException"}),j=(0,H.useCallback)(function(){var e=i()(c()().mark((function e(l){var n,o,i,a,u,r,s,d,S,p,H,M,h,v,I;return c()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=Number(l.unixMilliSecond),i=m()(o).utc().format("YYYY-MM-DDTHH:mm:ss.SSS"),a=m()(o).utc().format(),u=m()(o).utc().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"),r=m()(o).format(),s=m()(o).unix(),d={utc:i,utcISO:a,utcISOMilliSecond:u,localTime:r,unixSecond:s},S="dayjs(".concat(o,").utc().format('YYYY-MM-DDTHH:mm:ss.SSS')"),p="dayjs(".concat(o,").utc().format()"),H="dayjs(".concat(o,").utc().format('YYYY-MM-DDTHH:mm:ss.SSS[Z]')"),M="dayjs(".concat(o,").format()"),h="dayjs(".concat(o,").unix()"),v="dayjs(".concat(o,").valueOf()"),I={utcHelp:S,utcISOHelp:p,utcISOMilliSecondHelp:H,localTimeHelp:M,unixSecondHelp:h,unixMilliSecondHelp:v},t(d),f(I),null===(n=x.current)||void 0===n||n.setFieldsValue(d),e.abrupt("return",!0);case 18:case"end":return e.stop()}}),e)})));return function(l){return e.apply(this,arguments)}}(),[]);return(0,M.jsx)(r.Z,{style:{width:"400px",marginBottom:"20px"},children:(0,M.jsxs)(s.A,{formRef:x,onFinish:function(){var e=i()(c()().mark((function e(l){return c()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",j(l));case 1:case"end":return e.stop()}}),e)})));return function(l){return e.apply(this,arguments)}}(),onReset:function(){var e;t({utc:"",utcISO:"",utcISOMilliSecond:"",localTime:"",unixSecond:""}),f({utcHelp:"",utcISOHelp:"",utcISOMilliSecondHelp:"",localTimeHelp:"",unixSecondHelp:"",unixMilliSecondHelp:""}),null===(e=x.current)||void 0===e||e.resetFields()},children:[(0,M.jsx)(d.Z,{name:"unixMilliSecond",label:Y,placeholder:"1710858210500",initialValue:"1710858210500",help:p.unixMilliSecondHelp,fieldProps:{autoFocus:!1,allowClear:!0},rules:[{required:!0,whitespace:!0,message:"".concat(g)}]}),(0,M.jsx)(d.Z,{name:"unixSecond",label:C,help:p.unixSecondHelp,fieldProps:{autoFocus:!1,onChange:void 0,allowClear:!1,value:n.unixSecond}}),(0,M.jsx)(d.Z,{name:"utc",label:v,help:p.utcHelp,fieldProps:{autoFocus:!1,onChange:void 0,allowClear:!1,value:n.utc}}),(0,M.jsx)(d.Z,{placeholder:"",name:"utcISO",label:I,help:p.utcISOHelp,fieldProps:{autoFocus:!1,onChange:void 0,allowClear:!1,value:n.utcISO}}),(0,M.jsx)(d.Z,{placeholder:"",name:"utcISOMilliSecond",label:O,help:p.utcISOMilliSecondHelp,fieldProps:{autoFocus:!1,onChange:void 0,allowClear:!1,value:n.utcISOMilliSecond}}),(0,M.jsx)(d.Z,{placeholder:"",name:"localTime",label:T,help:p.localTimeHelp,fieldProps:{autoFocus:!1,onChange:void 0,allowClear:!1,value:n.localTime}})]})})}},91885:function(){}}]);