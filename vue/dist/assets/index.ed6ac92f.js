import{V as Re,_ as Ue,u as je,I as Ve,a as We,d as J,C as ht,m as le,n as U}from"./index.46025505.js";import{T as ue}from"./index.3aedcce4.js";import{i as Q,p as O,l as pt,g as mt,e as se,P as _e,a as gt,b as vt,s as ft,c as Ce,_ as ce,Z as yt,d as k,f as we,u as Se,h as bt,j as _t,k as Ct,m as wt,n as St,o as xt,q as Dt,r as At,t as Et,S as Tt,G as Lt,v as Mt,C as Ft,w as Ot,L as zt,x as xe,y as Ge,z as $t,A as Nt,B as kt,D as Pt,E as It,F as te,H as ee,I as de,J as he,K as R,M as Ke,N as pe,O as He,Q as Ye,R as Xe}from"./install.ed13410d.js";import{i as Ze}from"./install.b04052e8.js";import{L as oe}from"./date.bd30d003.js";var Bt=["size"];function De(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function Ae(e){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};a%2?De(Object(t),!0).forEach(function(r){We(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):De(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Rt={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M3.5 1c-.48 0-1 .34-1 .92v12.16c0 .58.52.92 1 .92h9c.48 0 1-.34 1-.92V5.7a1 1 0 00-.3-.71L9.5 1.3a1 1 0 00-.7-.3H3.5zm5 1v4.01h4V14h-9V2h5zm1 .7l2.3 2.31H9.5v-2.3z",fillOpacity:.9}}]},Ut=Re.extend({name:"FileIcon",functional:!0,props:{size:{type:String},onClick:{type:Function}},render:function(a,t){var r=t.props,n=t.data,s=r.size,i=Ue(r,Bt),l=je(s),o=l.className,h=l.style,u=Ae(Ae({},i||{}),{},{id:"file",icon:Rt,staticClass:o,style:h});return n.props=u,a(Ve,n)}}),jt=["size"];function Ee(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function Te(e){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};a%2?Ee(Object(t),!0).forEach(function(r){We(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ee(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Vt={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M6 1c.53 0 1.02.12 1.46.35l-.63.8a2.24 2.24 0 00-3.08 2.1c0 1.23.98 2.22 2.2 2.25v1A3.25 3.25 0 016 1zM.54 9.44c1.65-.78 3.48-1.21 5.41-1.22v1c-1.77 0-3.44.4-4.95 1.1V12h1.86v1H.5a.5.5 0 01-.5-.5v-2.2c0-.36.2-.7.54-.86z"}},{tag:"path",attrs:{fill:"currentColor",d:"M10 8.31a3.25 3.25 0 110-6.5 3.25 3.25 0 010 6.5zm0-1a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zM16 11.52c0-.37-.2-.72-.54-.87a12.83 12.83 0 00-10.92 0 .96.96 0 00-.54.87V14c0 .28.22.5.5.5h11a.5.5 0 00.5-.5v-2.48zm-1 .01v1.97H5v-1.97a11.83 11.83 0 0110 0z"}}]},Wt=Re.extend({name:"UsergroupIcon",functional:!0,props:{size:{type:String},onClick:{type:Function}},render:function(a,t){var r=t.props,n=t.data,s=r.size,i=Ue(r,jt),l=je(s),o=l.className,h=l.style,u=Te(Te({},i||{}),{},{id:"usergroup",icon:Vt,staticClass:o,style:h});return n.props=u,a(Ve,n)}}),Z=Math.PI*2,Le=Math.PI/180;function Gt(e,a){return mt(e.getBoxLayoutParams(),{width:a.getWidth(),height:a.getHeight()})}function Kt(e,a,t){a.eachSeriesByType(e,function(r){var n=r.getData(),s=n.mapDimension("value"),i=Gt(r,t),l=r.get("center"),o=r.get("radius");Q(o)||(o=[0,o]),Q(l)||(l=[l,l]);var h=O(i.width,t.getWidth()),u=O(i.height,t.getHeight()),y=Math.min(h,u),m=O(l[0],h)+i.x,c=O(l[1],u)+i.y,d=O(o[0],y/2),p=O(o[1],y/2),f=-r.get("startAngle")*Le,v=r.get("minAngle")*Le,g=0;n.each(s,function(E){!isNaN(E)&&g++});var b=n.getSum(s),D=Math.PI/(b||g)*2,w=r.get("clockwise"),S=r.get("roseType"),A=r.get("stillShowZeroSum"),_=n.getDataExtent(s);_[0]=0;var C=Z,j=0,M=f,T=w?1:-1;if(n.setLayout({viewRect:i,r:p}),n.each(s,function(E,L){var x;if(isNaN(E)){n.setItemLayout(L,{angle:NaN,startAngle:NaN,endAngle:NaN,clockwise:w,cx:m,cy:c,r0:d,r:S?NaN:p});return}S!=="area"?x=b===0&&A?D:E*D:x=Z/g,x<v?(x=v,C-=v):j+=E;var $=M+T*x;n.setItemLayout(L,{angle:x,startAngle:M,endAngle:$,clockwise:w,cx:m,cy:c,r0:d,r:S?pt(E,_,[d,p]):p}),M=$}),C<Z&&g)if(C<=.001){var z=Z/g;n.each(s,function(E,L){if(!isNaN(E)){var x=n.getItemLayout(L);x.angle=z,x.startAngle=f+T*L*z,x.endAngle=f+T*(L+1)*z}})}else D=C/j,M=f,n.each(s,function(E,L){if(!isNaN(E)){var x=n.getItemLayout(L),$=x.angle===v?v:E*D;x.startAngle=M,x.endAngle=M+T*$,M+=T*$}})})}function Ht(e){return{seriesType:e,reset:function(a,t){var r=t.findComponents({mainType:"legend"});if(!(!r||!r.length)){var n=a.getData();n.filterSelf(function(s){for(var i=n.getName(s),l=0;l<r.length;l++)if(!r[l].isSelected(i))return!1;return!0})}}}}var Yt=Math.PI/180;function Me(e,a,t,r,n,s,i,l,o,h){if(e.length<2)return;function u(p){for(var f=p.rB,v=f*f,g=0;g<p.list.length;g++){var b=p.list[g],D=Math.abs(b.label.y-t),w=r+b.len,S=w*w,A=Math.sqrt((1-Math.abs(D*D/v))*S);b.label.x=a+(A+b.len2)*n}}function y(p){for(var f={list:[],maxY:0},v={list:[],maxY:0},g=0;g<p.length;g++)if(p[g].labelAlignTo==="none"){var b=p[g],D=b.label.y>t?v:f,w=Math.abs(b.label.y-t);if(w>D.maxY){var S=b.label.x-a-b.len2*n,A=r+b.len,_=Math.abs(S)<A?Math.sqrt(w*w/(1-S*S/A/A)):A;D.rB=_,D.maxY=w}D.list.push(b)}u(f),u(v)}for(var m=e.length,c=0;c<m;c++)if(e[c].position==="outer"&&e[c].labelAlignTo==="labelLine"){var d=e[c].label.x-h;e[c].linePoints[1][0]+=d,e[c].label.x=h}ft(e,o,o+i)&&y(e)}function Xt(e,a,t,r,n,s,i,l){for(var o=[],h=[],u=Number.MAX_VALUE,y=-Number.MAX_VALUE,m=0;m<e.length;m++){var c=e[m].label;Fe(e[m])||(c.x<a?(u=Math.min(u,c.x),o.push(e[m])):(y=Math.max(y,c.x),h.push(e[m])))}Me(h,a,t,r,1,n,s,i,l,y),Me(o,a,t,r,-1,n,s,i,l,u);for(var m=0;m<e.length;m++){var d=e[m],c=d.label;if(!Fe(d)){var p=d.linePoints;if(p){var f=d.labelAlignTo==="edge",v=d.rect.width,g=void 0;f?c.x<a?g=p[2][0]-d.labelDistance-i-d.edgeDistance:g=i+n-d.edgeDistance-p[2][0]-d.labelDistance:c.x<a?g=c.x-i-d.bleedMargin:g=i+n-c.x-d.bleedMargin,g<d.rect.width&&(d.label.style.width=g,d.labelAlignTo==="edge"&&(v=g));var b=p[1][0]-p[2][0];f?c.x<a?p[2][0]=i+d.edgeDistance+v+d.labelDistance:p[2][0]=i+n-d.edgeDistance-v-d.labelDistance:(c.x<a?p[2][0]=c.x+d.labelDistance:p[2][0]=c.x-d.labelDistance,p[1][0]=p[2][0]+b),p[1][1]=p[2][1]=c.y}}}}function Fe(e){return e.position==="center"}function Zt(e){var a=e.getData(),t=[],r,n,s=!1,i=(e.get("minShowLabelAngle")||0)*Yt,l=a.getLayout("viewRect"),o=a.getLayout("r"),h=l.width,u=l.x,y=l.y,m=l.height;function c(S){S.ignore=!0}function d(S){if(!S.ignore)return!0;for(var A in S.states)if(S.states[A].ignore===!1)return!0;return!1}a.each(function(S){var A=a.getItemGraphicEl(S),_=A.shape,C=A.getTextContent(),j=A.getTextGuideLine(),M=a.getItemModel(S),T=M.getModel("label"),z=T.get("position")||M.get(["emphasis","label","position"]),E=T.get("distanceToLabelLine"),L=T.get("alignTo"),x=O(T.get("edgeDistance"),h),$=T.get("bleedMargin"),V=M.getModel("labelLine"),P=V.get("length");P=O(P,h);var W=V.get("length2");if(W=O(W,h),Math.abs(_.endAngle-_.startAngle)<i){se(C.states,c),C.ignore=!0;return}if(!!d(C)){var G=(_.startAngle+_.endAngle)/2,F=Math.cos(G),I=Math.sin(G),B,K,me,H;r=_.cx,n=_.cy;var N=z==="inside"||z==="inner";if(z==="center")B=_.cx,K=_.cy,H="center";else{var ae=(N?(_.r+_.r0)/2*F:_.r*F)+r,re=(N?(_.r+_.r0)/2*I:_.r*I)+n;if(B=ae+F*3,K=re+I*3,!N){var ge=ae+F*(P+o-_.r),ve=re+I*(P+o-_.r),fe=ge+(F<0?-1:1)*W,ye=ve;L==="edge"?B=F<0?u+x:u+h-x:B=fe+(F<0?-E:E),K=ye,me=[[ae,re],[ge,ve],[fe,ye]]}H=N?"center":L==="edge"?F>0?"right":"left":F>0?"left":"right"}var Y,ne=T.get("rotate");if(typeof ne=="number"?Y=ne*(Math.PI/180):Y=ne?F<0?-G+Math.PI:-G:0,s=!!Y,C.x=B,C.y=K,C.rotation=Y,C.setStyle({verticalAlign:"middle"}),N){C.setStyle({align:H});var ie=C.states.select;ie&&(ie.x+=C.x,ie.y+=C.y)}else{var X=C.getBoundingRect().clone();X.applyTransform(C.getComputedTransform());var be=(C.style.margin||0)+2.1;X.y-=be/2,X.height+=be,t.push({label:C,labelLine:j,position:z,len:P,len2:W,minTurnAngle:V.get("minTurnAngle"),maxSurfaceAngle:V.get("maxSurfaceAngle"),surfaceNormal:new _e(F,I),linePoints:me,textAlign:H,labelDistance:E,labelAlignTo:L,edgeDistance:x,bleedMargin:$,rect:X})}A.setTextConfig({inside:N})}}),!s&&e.get("avoidLabelOverlap")&&Xt(t,r,n,o,h,m,u,y);for(var p=0;p<t.length;p++){var f=t[p],v=f.label,g=f.labelLine,b=isNaN(v.x)||isNaN(v.y);if(v){v.setStyle({align:f.textAlign}),b&&(se(v.states,c),v.ignore=!0);var D=v.states.select;D&&(D.x+=v.x,D.y+=v.y)}if(g){var w=f.linePoints;b||!w?(se(g.states,c),g.ignore=!0):(gt(w,f.minTurnAngle),vt(w,f.surfaceNormal,f.maxSurfaceAngle),g.setShape({points:w}),v.__hostTarget.textGuideLineConfig={anchor:new _e(w[0][0],w[0][1])})}}}function q(e,a){var t=e.get("borderRadius");return t==null?null:(Q(t)||(t=[t,t]),{innerCornerRadius:Ce(t[0],a.r0),cornerRadius:Ce(t[1],a.r)})}var qt=function(e){ce(a,e);function a(t,r,n){var s=e.call(this)||this;s.z2=2;var i=new yt;return s.setTextContent(i),s.updateData(t,r,n,!0),s}return a.prototype.updateData=function(t,r,n,s){var i=this,l=t.hostModel,o=t.getItemModel(r),h=o.getModel("emphasis"),u=t.getItemLayout(r),y=k(q(o.getModel("itemStyle"),u)||{},u);if(isNaN(y.startAngle)){i.setShape(y);return}if(s){i.setShape(y);var m=l.getShallow("animationType");m==="scale"?(i.shape.r=u.r0,we(i,{shape:{r:u.r}},l,r)):n!=null?(i.setShape({startAngle:n,endAngle:n}),we(i,{shape:{startAngle:u.startAngle,endAngle:u.endAngle}},l,r)):(i.shape.endAngle=u.startAngle,Se(i,{shape:{endAngle:u.endAngle}},l,r))}else Se(i,{shape:y},l,r);i.useStyle(t.getItemVisual(r,"style")),bt(i,o);var c=(u.startAngle+u.endAngle)/2,d=l.get("selectedOffset"),p=Math.cos(c)*d,f=Math.sin(c)*d,v=o.getShallow("cursor");v&&i.attr("cursor",v),this._updateLabel(l,t,r),i.ensureState("emphasis").shape=_t({r:u.r+(h.get("scale")&&h.get("scaleSize")||0)},q(h.getModel("itemStyle"),u)),k(i.ensureState("select"),{x:p,y:f,shape:q(o.getModel(["select","itemStyle"]),u)}),k(i.ensureState("blur"),{shape:q(o.getModel(["blur","itemStyle"]),u)});var g=i.getTextGuideLine(),b=i.getTextContent();g&&k(g.ensureState("select"),{x:p,y:f}),k(b.ensureState("select"),{x:p,y:f}),Ct(this,h.get("focus"),h.get("blurScope"))},a.prototype._updateLabel=function(t,r,n){var s=this,i=r.getItemModel(n),l=i.getModel("labelLine"),o=r.getItemVisual(n,"style"),h=o&&o.fill,u=o&&o.opacity;wt(s,St(i),{labelFetcher:r.hostModel,labelDataIndex:n,inheritColor:h,defaultOpacity:u,defaultText:t.getFormattedLabel(n,"normal")||r.getName(n)});var y=s.getTextContent();s.setTextConfig({position:null,rotation:null}),y.attr({z2:10});var m=t.get(["label","position"]);if(m!=="outside"&&m!=="outer")s.removeTextGuideLine();else{var c=this.getTextGuideLine();c||(c=new xt,this.setTextGuideLine(c)),Dt(this,Et(i),{stroke:h,opacity:At(l.get(["lineStyle","opacity"]),u,1)})}},a}(Tt),Jt=function(e){ce(a,e);function a(){var t=e!==null&&e.apply(this,arguments)||this;return t.ignoreLabelLineUpdate=!0,t}return a.prototype.init=function(){var t=new Lt;this._sectorGroup=t},a.prototype.render=function(t,r,n,s){var i=t.getData(),l=this._data,o=this.group,h;if(!l&&i.count()>0){for(var u=i.getItemLayout(0),y=1;isNaN(u&&u.startAngle)&&y<i.count();++y)u=i.getItemLayout(y);u&&(h=u.startAngle)}i.diff(l).add(function(m){var c=new qt(i,m,h);i.setItemGraphicEl(m,c),o.add(c)}).update(function(m,c){var d=l.getItemGraphicEl(c);d.updateData(i,m,h),d.off("click"),o.add(d),i.setItemGraphicEl(m,d)}).remove(function(m){var c=l.getItemGraphicEl(m);Mt(c,t,m)}).execute(),Zt(t),t.get("animationTypeUpdate")!=="expansion"&&(this._data=i)},a.prototype.dispose=function(){},a.prototype.containPoint=function(t,r){var n=r.getData(),s=n.getItemLayout(0);if(s){var i=t[0]-s.cx,l=t[1]-s.cy,o=Math.sqrt(i*i+l*l);return o<=s.r&&o>=s.r0}},a.type="pie",a}(Ft),Qt=Jt;function ea(e,a,t){a=Q(a)&&{coordDimensions:a}||k({},a);var r=e.getSource(),n=Ot(r,a),s=new zt(n,e);return s.initData(r,t),s}var ta=function(){function e(a,t){this._getDataWithEncodedVisual=a,this._getRawData=t}return e.prototype.getAllNames=function(){var a=this._getRawData();return a.mapArray(a.getName)},e.prototype.containName=function(a){var t=this._getRawData();return t.indexOfName(a)>=0},e.prototype.indexOfName=function(a){var t=this._getDataWithEncodedVisual();return t.indexOfName(a)},e.prototype.getItemVisual=function(a,t){var r=this._getDataWithEncodedVisual();return r.getItemVisual(a,t)},e}(),aa=ta,ra=function(e){ce(a,e);function a(){var t=e!==null&&e.apply(this,arguments)||this;return t.useColorPaletteOnData=!0,t}return a.prototype.init=function(t){e.prototype.init.apply(this,arguments),this.legendVisualProvider=new aa(xe(this.getData,this),xe(this.getRawData,this)),this._defaultLabelLine(t)},a.prototype.mergeOption=function(){e.prototype.mergeOption.apply(this,arguments)},a.prototype.getInitialData=function(){return ea(this,{coordDimensions:["value"],encodeDefaulter:Ge($t,this)})},a.prototype.getDataParams=function(t){var r=this.getData(),n=e.prototype.getDataParams.call(this,t),s=[];return r.each(r.mapDimension("value"),function(i){s.push(i)}),n.percent=Nt(s,t,r.hostModel.get("percentPrecision")),n.$vars.push("percent"),n},a.prototype._defaultLabelLine=function(t){kt(t,"labelLine",["show"]);var r=t.labelLine,n=t.emphasis.labelLine;r.show=r.show&&t.label.show,n.show=n.show&&t.emphasis.label.show},a.type="series.pie",a.defaultOption={zlevel:0,z:2,legendHoverLink:!0,center:["50%","50%"],radius:[0,"75%"],clockwise:!0,startAngle:90,minAngle:0,minShowLabelAngle:0,selectedOffset:10,percentPrecision:2,stillShowZeroSum:!0,left:0,top:0,right:0,bottom:0,width:null,height:null,label:{rotate:0,show:!0,overflow:"truncate",position:"outer",alignTo:"none",edgeDistance:"25%",bleedMargin:10,distanceToLabelLine:5},labelLine:{show:!0,length:15,length2:15,smooth:!1,minTurnAngle:90,maxSurfaceAngle:90,lineStyle:{width:1,type:"solid"}},itemStyle:{borderWidth:1},labelLayout:{hideOverlap:!0},emphasis:{scale:!0,scaleSize:5},avoidLabelOverlap:!0,animationType:"expansion",animationDuration:1e3,animationTypeUpdate:"transition",animationEasingUpdate:"cubicInOut",animationDurationUpdate:500,animationEasing:"cubicInOut"},a}(Pt),na=ra;function ia(e){e.registerChartView(Qt),e.registerSeriesModel(na),It("pie",e.registerAction),e.registerLayout(Ge(Kt,"pie")),e.registerProcessor(Ht("pie"))}function Oe(e){const t={xAxis:{type:"category",show:!1,data:["\u5468\u4E00","\u5468\u4E8C","\u5468\u4E09","\u5468\u56DB","\u5468\u4E94","\u5468\u516D","\u5468\u65E5"]},yAxis:{show:!1,type:"value"},grid:{top:0,left:0,right:0,bottom:0}};if(e==="line")return{...t,color:["#fff"],series:[{data:[150,230,224,218,135,147,260],type:e,showSymbol:!0,symbol:"circle",symbolSize:0,markPoint:{data:[{type:"max",name:"\u6700\u5927\u503C"},{type:"min",name:"\u6700\u5C0F\u503C"}]},itemStyle:{normal:{lineStyle:{width:2}}}}]};if(e==="bar")return{...t,color:te(),series:[{data:[100,130,184,218,{value:135,itemStyle:{opacity:.2}},{value:118,itemStyle:{opacity:.2}},{value:60,itemStyle:{opacity:.2}}],type:e,barWidth:9}]}}function ze({dateTime:e=[],placeholderColor:a,borderColor:t}){const n=[],s=[],i=[];for(let o=0;o<10;o++){if(e.length>0){const h=(new Date(e[1]).getTime()-new Date(e[0]).getTime())/10,u=new Date(e[0]).getTime()+h*o;n.push(J(u).format("MM-DD"))}else n.push(J().subtract(10-o,"day").format("MM-DD"));s.push(ee().toString()),i.push(ee().toString())}return{color:te(),tooltip:{trigger:"item"},xAxis:{type:"category",data:n,axisLabel:{color:a},axisLine:{lineStyle:{color:t,width:1}}},yAxis:{type:"value",axisLabel:{color:a},splitLine:{lineStyle:{color:t}}},grid:{top:"5%",left:"25px",right:0,bottom:"60px"},legend:{icon:"rect",itemWidth:12,itemHeight:4,itemGap:48,textStyle:{fontSize:12,color:a},left:"center",bottom:"0",orient:"horizontal",data:["\u672C\u6708","\u4E0A\u6708"]},series:[{name:"\u672C\u6708",data:i,type:"bar"},{name:"\u4E0A\u6708",data:s,type:"bar"}]}}function $e({dateTime:e=[],placeholderColor:a,borderColor:t}){const n=[],s=[],i=[];for(let o=0;o<10;o++){if(e.length>0){const h=(new Date(e[1]).getTime()-new Date(e[0]).getTime())/10,u=new Date(e[0]).getTime()+h*o;n.push(J(u).format("MM-DD"))}else n.push(J().subtract(10-o,"day").format("MM-DD"));s.push(ee().toString()),i.push(ee().toString())}return{color:te(),tooltip:{trigger:"item"},grid:{left:"0",right:"20px",top:"5px",bottom:"36px",containLabel:!0},legend:{left:"center",bottom:"0",orient:"horizontal",data:["\u672C\u6708","\u4E0A\u6708"],textStyle:{fontSize:12,color:a}},xAxis:{type:"category",data:n,boundaryGap:!1,axisLabel:{color:a},axisLine:{lineStyle:{width:1}}},yAxis:{type:"value",axisLabel:{color:a},splitLine:{lineStyle:{color:t}}},series:[{name:"\u672C\u6708",data:i,type:"line",smooth:!1,showSymbol:!0,symbol:"circle",symbolSize:8,itemStyle:{normal:{borderColor:t,borderWidth:1}},areaStyle:{normal:{opacity:.1}}},{name:"\u4E0A\u6708",data:s,type:"line",smooth:!1,showSymbol:!0,symbol:"circle",symbolSize:8,itemStyle:{normal:{borderColor:t,borderWidth:1}}}]}}function sa({radius:e=42,textColor:a,placeholderColor:t,containerColor:r}){return{color:te(),tooltip:{show:!1,trigger:"axis",position:null},grid:{top:"0",right:"0"},legend:{selectedMode:!1,itemWidth:12,itemHeight:4,textStyle:{fontSize:12,color:t},left:"center",bottom:"0",orient:"horizontal"},series:[{name:"\u9500\u552E\u6E20\u9053",type:"pie",radius:["48%","60%"],avoidLabelOverlap:!0,selectedMode:!0,hoverAnimation:!0,silent:!0,itemStyle:{borderColor:r,borderWidth:1},label:{show:!0,position:"center",formatter:["{value|{d}%}","{name|{b}\u6E20\u9053\u5360\u6BD4}"].join(`
`),rich:{value:{color:a,fontSize:28,fontWeight:"normal",lineHeight:46},name:{color:"#909399",fontSize:12,lineHeight:14}}},emphasis:{label:{show:!0,formatter:["{value|{d}%}","{name|{b}\u6E20\u9053\u5360\u6BD4}"].join(`
`),rich:{value:{color:a,fontSize:28,fontWeight:"normal",lineHeight:46},name:{color:"#909399",fontSize:14,lineHeight:14}}}},labelLine:{show:!1},data:[{value:1048,name:"\u7EBF\u4E0A"},{value:e*7,name:"\u95E8\u5E97"}]}]}}const qe=[{title:"\u4ECA\u65E5\u653B\u51FB\u6570",number:"11100334",upTrend:"20.5%",leftType:"echarts-line"},{title:"\u4ECA\u5929\u603B\u8BBF\u95EE\u91CF",number:"1111768",downTrend:"20.5%",leftType:"echarts-bar"},{title:"\u6D3B\u8DC3IP\uFF08\u4E2A\uFF09",number:"1126",downTrend:"20.5%",leftType:"icon-usergroup"},{title:"\u5206\u5E03\u5730\u533A\uFF08\u4E2A\uFF09",number:527,downTrend:"20.5%",leftType:"icon-file-paste"}],Je=[{growUp:1,productName:"\u56FD\u5BB6\u7535\u7F51\u6709\u9650\u516C\u53F8",count:7059,date:"2021-09-01"},{growUp:-1,productName:"\u6DF1\u5733\u71C3\u6C14\u96C6\u56E2\u80A1\u4EFD\u6709\u9650\u516C\u53F8",count:6437,date:"2021-09-01"},{growUp:4,productName:"\u56FD\u5BB6\u70DF\u8349\u4E13\u5356\u5C40",count:4221,date:"2021-09-01"},{growUp:3,productName:"\u4E2D\u56FD\u7535\u4FE1\u96C6\u56E2\u6709\u9650\u516C\u53F8",count:3317,date:"2021-09-01"},{growUp:-3,productName:"\u4E2D\u56FD\u79FB\u52A8\u901A\u4FE1\u96C6\u56E2\u6709\u9650\u516C\u53F8",count:3015,date:"2021-09-01"},{growUp:-3,productName:"\u65B0\u4F59\u5E02\u529E\u516C\u7528\u6237\u91C7\u8D2D\u9879\u76EE",count:2015,date:"2021-09-12"}],Qe=[{growUp:1,productName:"\u817E\u8BAF\u79D1\u6280\uFF08\u6DF1\u5733\uFF09\u6709\u9650\u516C\u53F8",count:3015,date:"2021-09-01"},{growUp:-1,productName:"\u5927\u6DA6\u53D1\u6709\u9650\u516C\u53F8",count:2015,date:"2021-09-01"},{growUp:6,productName:"\u56DB\u5DDD\u6D77\u5E95\u635E\u80A1\u4EFD\u6709\u9650\u516C\u53F8",count:1815,date:"2021-09-11"},{growUp:-3,productName:"\u7D22\u5C3C\uFF08\u4E2D\u56FD\uFF09\u6709\u9650\u516C\u53F8",count:1015,date:"2021-09-21"},{growUp:-4,productName:"\u677E\u4E0B\u7535\u5668\uFF08\u4E2D\u56FD\uFF09\u6709\u9650\u516C\u53F8",count:445,date:"2021-09-19"},{growUp:-3,productName:"\u65B0\u4F59\u5E02\u529E\u516C\u7528\u6237\u91C7\u8D2D\u9879\u76EE",count:2015,date:"2021-09-12"}],et=[{align:"center",colKey:"index",title:"\u6392\u540D",width:80,fixed:"left"},{align:"left",ellipsis:!0,colKey:"productName",title:"\u5BA2\u6237\u540D\u79F0",minWidth:200},{align:"center",colKey:"growUp",width:100,title:"\u8F83\u4E0A\u5468"},{align:"center",colKey:"count",title:"\u8BA2\u5355\u91CF",width:100},{align:"center",colKey:"date",width:140,title:"\u5408\u540C\u7B7E\u8BA2\u65E5\u671F"},{align:"center",colKey:"operation",title:"\u64CD\u4F5C",width:80,fixed:"right"}],tt=[{align:"center",colKey:"index",title:"\u6392\u540D",width:80,fixed:"left"},{align:"left",ellipsis:!0,colKey:"productName",title:"\u4F9B\u5E94\u5546\u540D\u79F0",minWidth:200},{align:"center",colKey:"growUp",width:100,title:"\u8F83\u4E0A\u5468"},{align:"center",colKey:"count",title:"\u8BA2\u5355\u91CF",width:100},{align:"center",colKey:"date",width:140,title:"\u5408\u540C\u7B7E\u8BA2\u65E5\u671F"},{align:"center",colKey:"operation",title:"\u64CD\u4F5C",width:80,fixed:"right"}];var at=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("t-row",{attrs:{gutter:[16,16]}},e._l(e.panelList,function(r,n){return t("t-col",{key:r.title,attrs:{xs:6,xl:3}},[t("t-card",{class:{"dashboard-item":!0,"dashboard-item--main-color":n==0},style:{height:"168px"},attrs:{title:r.title},scopedSlots:e._u([{key:"footer",fn:function(){return[t("div",{staticClass:"dashboard-item-bottom"},[t("div",{staticClass:"dashboard-item-block"},[e._v(" \u81EA\u4ECE\u4E0A\u5468\u4EE5\u6765 "),t("trend",{staticClass:"dashboard-item-trend",attrs:{type:r.upTrend?"up":"down","is-reverse-color":n===0,describe:r.upTrend||r.downTrend}})],1),t("chevron-right-icon")],1)]},proxy:!0}],null,!0)},[t("div",{staticClass:"dashboard-item-top"},[t("span",{style:{fontSize:`${e.resizeTime*36}px`}},[e._v(e._s(r.number))])]),t("div",{staticClass:"dashboard-item-left"},[n===0?t("div",{staticClass:"dashboard-chart-container",style:{width:`${e.resizeTime*120}px`,height:`${e.resizeTime*66}px`},attrs:{id:"moneyContainer"}}):n===1?t("div",{staticClass:"dashboard-chart-container",style:{width:`${e.resizeTime*120}px`,height:`${e.resizeTime*42}px`},attrs:{id:"refundContainer"}}):n===2?t("span",{style:{marginTop:"-24px"}},[t("usergroup-icon")],1):t("span",{style:{marginTop:"-24px"}},[t("file-icon")],1)])])],1)}),1)},oa=[];at._withStripped=!0;de([Ke,Ze,pe]);const la={name:"TopPanel",components:{Trend:ue,UsergroupIcon:Wt,FileIcon:Ut,ChevronRightIcon:ht},data(){return{resizeTime:1,panelList:qe}},computed:{...le("setting",["brandTheme","mode"])},watch:{brandTheme(){he([this.refundChart])},mode(){[this.moneyCharts,this.refundChart].forEach(e=>{e.dispose()}),this.renderCharts()}},mounted(){this.$nextTick(()=>{this.updateContainer()}),window.addEventListener("resize",this.updateContainer,!1),this.renderCharts()},methods:{updateContainer(){document.documentElement.clientWidth>=1400&&document.documentElement.clientWidth<1920?this.resizeTime=(document.documentElement.clientWidth/2080).toFixed(2):document.documentElement.clientWidth<1080?this.resizeTime=(document.documentElement.clientWidth/1080).toFixed(2):this.resizeTime=1,this.moneyCharts.resize({width:`${this.resizeTime*120}px`,height:`${this.resizeTime*66}px`}),this.refundChart.resize({width:`${this.resizeTime*120}px`,height:`${this.resizeTime*42}px`})},renderCharts(){this.$store.state.setting,this.moneyContainer||(this.moneyContainer=document.getElementById("moneyContainer")),this.moneyCharts=R(this.moneyContainer),this.moneyCharts.setOption(Oe("line")),this.refundContainer||(this.refundContainer=document.getElementById("refundContainer")),this.refundChart=R(this.refundContainer),this.refundChart.setOption(Oe("bar"))}}},Ne={};var rt=U(la,at,oa,!1,ua,"6543c289",null,null);function ua(e){for(let a in Ne)this[a]=Ne[a]}rt.options.__file="src/pages/dashboard/base/components/TopPanel.vue";var ca=function(){return rt.exports}(),nt=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("t-row",{attrs:{gutter:[16,16]}},[t("t-col",{attrs:{xs:12,xl:9}},[t("t-card",{staticClass:"dashboard-chart-card",attrs:{title:"\u6708\u5EA6\u653B\u51FB\u60C5\u51B5",subtitle:"(\u6B21)"},scopedSlots:e._u([{key:"actions",fn:function(){return[t("div",{staticClass:"dashboard-chart-title-container"},[t("t-date-range-picker",{staticClass:"card-date-picker-container",attrs:{theme:"primary",mode:"date","default-value":e.LAST_7_DAYS},on:{change:e.onCurrencyChange}})],1)]},proxy:!0}])},[t("div",{ref:"monitorContainer",style:{width:"100%",height:`${e.resizeTime*326}px`},attrs:{id:"monitorContainer"}})])],1),t("t-col",{attrs:{xs:12,xl:3}},[t("t-card",{staticClass:"dashboard-chart-card",attrs:{title:"\u9500\u552E\u6E20\u9053",subtitle:e.currentMonth}},[t("div",{ref:"countContainer",style:{width:`${e.resizeTime*326}px`,height:`${e.resizeTime*326}px`,margin:"0 auto"},attrs:{id:"countContainer"}})])],1)],1)},da=[];nt._withStripped=!0;de([He,Ye,ia,Xe,Ke,pe]);const ha={name:"MiddleChart",data(){return{LAST_7_DAYS:oe,resizeTime:1,currentMonth:this.getThisMonth()}},computed:{...le("setting",["brandTheme","mode"])},watch:{brandTheme(){he([this.countChart,this.monitorChart])},mode(){[this.countChart,this.monitorChart].forEach(e=>{e.dispose()}),this.renderCharts()}},mounted(){this.$nextTick(()=>{this.updateContainer()}),window.addEventListener("resize",this.updateContainer,!1),this.renderCharts()},methods:{getThisMonth(e=""){let a;if(!e||e.length===0)return a=new Date,`${a.getFullYear()}-${a.getMonth()+1}`;a=new Date(e[0]);const t=new Date(e[1]),r=a.getMonth()+1>9?a.getMonth()+1:`0${a.getMonth()+1}`,n=t.getMonth()+1>9?t.getMonth()+1:`0${t.getMonth()+1}`;return`${a.getFullYear()}-${r}  \u81F3  ${t.getFullYear()}-${n}`},onCurrencyChange(e){const{chartColors:a}=this.$store.state.setting;this.currentMonth=this.getThisMonth(e),this.monitorChart.setOption($e({dateTime:e,...a}))},updateContainer(){document.documentElement.clientWidth>=1400&&document.documentElement.clientWidth<1920?this.resizeTime=(document.documentElement.clientWidth/2080).toFixed(2):document.documentElement.clientWidth<1080?this.resizeTime=(document.documentElement.clientWidth/1080).toFixed(2):this.resizeTime=1,this.countChart.resize({width:`${this.resizeTime*326}px`,height:`${this.resizeTime*326}px`}),this.monitorChart.resize({width:this.monitorContainer.clientWidth,height:`${this.resizeTime*326}px`})},renderCharts(){const{chartColors:e}=this.$store.state.setting;this.monitorContainer||(this.monitorContainer=document.getElementById("monitorContainer")),this.monitorChart=R(this.monitorContainer),this.monitorChart.setOption($e({...e})),this.countContainer||(this.countContainer=document.getElementById("countContainer")),this.countChart=R(this.countContainer);const a=sa(e);this.countChart.setOption(a)}}},ke={};var it=U(ha,nt,da,!1,pa,"1544bf42",null,null);function pa(e){for(let a in ke)this[a]=ke[a]}it.options.__file="src/pages/dashboard/base/components/MiddleChart.vue";var ma=function(){return it.exports}(),st=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("t-row",{attrs:{gutter:[16,16]}},[t("t-col",{attrs:{xs:12,xl:6}},[t("t-card",{staticClass:"dashboard-rank-card",attrs:{title:"\u57DF\u540D\u653B\u51FB\u6392\u540D"},scopedSlots:e._u([{key:"actions",fn:function(){return[t("t-radio-group",{attrs:{"default-value":"dateVal"}},[t("t-radio-button",{attrs:{value:"dateVal"}},[e._v("\u672C\u5468")]),t("t-radio-button",{attrs:{value:"monthVal"}},[e._v("\u8FD1\u4E09\u4E2A\u6708")])],1)]},proxy:!0}])},[t("t-table",{attrs:{data:e.saleTendList,columns:e.saleColumns,rowKey:"productName"},scopedSlots:e._u([{key:"index",fn:function(r){var n=r.rowIndex;return[t("span",{class:e.getRankClass(n)},[e._v(" "+e._s(n+1)+" ")])]}},{key:"growUp",fn:function(r){var n=r.row;return t("span",{},[t("trend",{attrs:{type:n.growUp>0?"up":"down",describe:Math.abs(n.growUp)}})],1)}},{key:"operation",fn:function(r){return[t("a",{staticClass:"link",on:{click:function(n){return e.rehandleClickOp(r)}}},[e._v("\u8BE6\u60C5")])]}}])})],1)],1),t("t-col",{attrs:{xs:12,xl:6}},[t("t-card",{staticClass:"dashboard-rank-card",attrs:{title:"\u91C7\u8D2D\u8BA2\u5355\u6392\u540D"},scopedSlots:e._u([{key:"actions",fn:function(){return[t("t-radio-group",{attrs:{"default-value":"dateVal"}},[t("t-radio-button",{attrs:{value:"dateVal"}},[e._v("\u672C\u5468")]),t("t-radio-button",{attrs:{value:"monthVal"}},[e._v("\u8FD1\u4E09\u4E2A\u6708")])],1)]},proxy:!0}])},[t("t-table",{attrs:{data:e.buyTendList,columns:e.buyColumns,rowKey:"productName"},scopedSlots:e._u([{key:"index",fn:function(r){var n=r.rowIndex;return[t("span",{class:e.getRankClass(n)},[e._v(" "+e._s(n+1)+" ")])]}},{key:"growUp",fn:function(r){var n=r.row;return t("span",{},[t("trend",{attrs:{type:n.growUp>0?"up":"down",describe:Math.abs(n.growUp)}})],1)}},{key:"operation",fn:function(r){return[t("a",{staticClass:"link",on:{click:function(n){return e.rehandleClickOp(r)}}},[e._v("\u8BE6\u60C5")])]}}])})],1)],1)],1)},ga=[];st._withStripped=!0;const va={name:"RankList",components:{Trend:ue},data(){return{buyTendList:Qe,saleTendList:Je,saleColumns:et,buyColumns:tt}},methods:{rehandleClickOp(e){console.log(e)},getRankClass(e){return["dashboard-rank__cell",{"dashboard-rank__cell--top":e<3}]}}},Pe={};var ot=U(va,st,ga,!1,fa,"76604244",null,null);function fa(e){for(let a in Pe)this[a]=Pe[a]}ot.options.__file="src/pages/dashboard/base/components/RankList.vue";var ya=function(){return ot.exports}(),lt=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("t-card",[t("t-row",[t("t-col",{attrs:{xs:12,xl:9}},[t("t-card",{class:{"dashboard-overview-card":!0,"overview-panel":!0},attrs:{bordered:!1,title:"\u51FA\u5165\u5E93\u6982\u89C8",subtitle:"(\u4EF6)"},scopedSlots:e._u([{key:"actions",fn:function(){return[t("t-date-range-picker",{staticClass:"card-date-picker-container",attrs:{theme:"primary",mode:"date","default-value":e.LAST_7_DAYS},on:{change:e.onStokeDataChange}})]},proxy:!0}])},[t("div",{ref:"stokeContainer",staticClass:"dashboard-chart-container",staticStyle:{width:"100%",height:"351px"},attrs:{id:"stokeContainer"}})])],1),t("t-col",{attrs:{xs:12,xl:3}},[t("t-card",{class:{"dashboard-overview-card":!0,"export-panel":!0},attrs:{bordered:!1},scopedSlots:e._u([{key:"actions",fn:function(){return[t("t-button",[e._v("\u5BFC\u51FA\u6570\u636E")])]},proxy:!0}])},[t("t-row",[t("t-col",{attrs:{xs:6,xl:12}},[t("t-card",{staticClass:"inner-card",attrs:{bordered:!1,subtitle:"\u672C\u6708\u51FA\u5E93\u603B\u8BA1\uFF08\u4EF6\uFF09"}},[t("div",{staticClass:"inner-card__content"},[t("div",{staticClass:"inner-card__content-title"},[e._v("1726")]),t("div",{staticClass:"inner-card__content-footer"},[e._v(" \u81EA\u4ECE\u4E0A\u5468\u4EE5\u6765 "),t("trend",{staticClass:"trend-tag",attrs:{type:"down","is-reverse-color":!1,describe:"20.3%"}})],1)])])],1),t("t-col",{attrs:{xs:6,xl:12}},[t("t-card",{staticClass:"inner-card",attrs:{bordered:!1,subtitle:"\u672C\u6708\u5165\u5E93\u603B\u8BA1\uFF08\u4EF6\uFF09"}},[t("div",{staticClass:"inner-card__content"},[t("div",{staticClass:"inner-card__content-title"},[e._v("226")]),t("div",{staticClass:"inner-card__content-footer"},[e._v(" \u81EA\u4ECE\u4E0A\u5468\u4EE5\u6765 "),t("trend",{staticClass:"trend-tag",attrs:{type:"down","is-reverse-color":!1,describe:"20.3%"}})],1)])])],1)],1)],1)],1)],1)],1)},ba=[];lt._withStripped=!0;de([He,Ye,Xe,Ze,pe]);const _a={name:"Overview",components:{Trend:ue},data(){return{panelList:qe,buyTendList:Qe,saleTendList:Je,saleColumns:et,buyColumns:tt,LAST_7_DAYS:oe}},computed:{...le("setting",["brandTheme","mode"])},watch:{brandTheme(){he([this.stokeChart])},mode(){[this.stokeChart].forEach(e=>{e.dispose()}),this.renderCharts()}},mounted(){this.$nextTick(()=>{this.updateContainer()}),window.addEventListener("resize",this.updateContainer,!1),this.renderCharts()},methods:{onStokeDataChange(e){const{chartColors:a}=this.$store.state.setting;this.stokeChart.setOption(ze({dateTime:e,...a}))},updateContainer(){this.stokeChart.resize({width:this.stokeContainer.clientWidth,height:this.stokeContainer.clientHeight})},renderCharts(){const{chartColors:e}=this.$store.state.setting;this.stokeContainer||(this.stokeContainer=document.getElementById("stokeContainer")),this.stokeChart=R(this.stokeContainer),this.stokeChart.setOption(ze({dateTime:oe,...e}))}}},Ie={};var ut=U(_a,lt,ba,!1,Ca,"3b33ef74",null,null);function Ca(e){for(let a in Ie)this[a]=Ie[a]}ut.options.__file="src/pages/dashboard/base/components/OutputOverview.vue";var wa=function(){return ut.exports}(),ct=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("top-panel",{staticClass:"row-container"}),t("middle-chart",{staticClass:"row-container"}),t("rank-list",{staticClass:"row-container"}),t("output-overview",{staticClass:"row-container"}),t("baidu-map",{staticClass:"map",attrs:{center:e.center,zoom:e.zoom},on:{ready:e.handler}})],1)},Sa=[];ct._withStripped=!0;const xa={name:"DashboardBase",components:{TopPanel:ca,MiddleChart:ma,RankList:ya,OutputOverview:wa},data(){return{center:{lng:0,lat:0},zoom:3}},methods:{handler({BMap:e,map:a}){console.log(e,a),this.center.lng=116.404,this.center.lat=39.915,this.zoom=15}}},Be={};var dt=U(xa,ct,Sa,!1,Da,"0d2b0973",null,null);function Da(e){for(let a in Be)this[a]=Be[a]}dt.options.__file="src/pages/dashboard/base/index.vue";var Fa=function(){return dt.exports}();export{Fa as default};