"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4386],{34386:function(e,t,o){o.d(t,{Z:function(){return F}});var r=o(63366),n=o(87462),p=o(67294),i=o(86010),l=o(94780),a=o(76591),u=o(8423),s=o(67816),c=o(2734),m=o(27623),d=o(98216),h=o(50294),g=o(34095),f=o(2068),v=o(51705),T=o(27909),Z=o(39184),b=o(49299),w=o(1588),y=o(34867);function x(e){return(0,y.ZP)("MuiTooltip",e)}let R=(0,w.Z)("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]);var M=o(85893);let P=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"],k=e=>{let{classes:t,disableInteractive:o,arrow:r,touch:n,placement:p}=e,i={popper:["popper",!o&&"popperInteractive",r&&"popperArrow"],tooltip:["tooltip",r&&"tooltipArrow",n&&"touch",`tooltipPlacement${(0,d.Z)(p.split("-")[0])}`],arrow:["arrow"]};return(0,l.Z)(i,x,t)},C=(0,s.ZP)(g.Z,{name:"MuiTooltip",slot:"Popper",overridesResolver:(e,t)=>{let{ownerState:o}=e;return[t.popper,!o.disableInteractive&&t.popperInteractive,o.arrow&&t.popperArrow,!o.open&&t.popperClose]}})(({theme:e,ownerState:t,open:o})=>(0,n.Z)({zIndex:(e.vars||e).zIndex.tooltip,pointerEvents:"none"},!t.disableInteractive&&{pointerEvents:"auto"},!o&&{pointerEvents:"none"},t.arrow&&{[`&[data-popper-placement*="bottom"] .${R.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${R.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${R.arrow}`]:(0,n.Z)({},t.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${R.arrow}`]:(0,n.Z)({},t.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),E=(0,s.ZP)("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(e,t)=>{let{ownerState:o}=e;return[t.tooltip,o.touch&&t.touch,o.arrow&&t.tooltipArrow,t[`tooltipPlacement${(0,d.Z)(o.placement.split("-")[0])}`]]}})(({theme:e,ownerState:t})=>(0,n.Z)({backgroundColor:e.vars?e.vars.palette.Tooltip.bg:(0,u.Fq)(e.palette.grey[700],.92),borderRadius:(e.vars||e).shape.borderRadius,color:(e.vars||e).palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium},t.arrow&&{position:"relative",margin:0},t.touch&&{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:`${Math.round(1e5*(16/14))/1e5}em`,fontWeight:e.typography.fontWeightRegular},{[`.${R.popper}[data-popper-placement*="left"] &`]:(0,n.Z)({transformOrigin:"right center"},t.isRtl?(0,n.Z)({marginLeft:"14px"},t.touch&&{marginLeft:"24px"}):(0,n.Z)({marginRight:"14px"},t.touch&&{marginRight:"24px"})),[`.${R.popper}[data-popper-placement*="right"] &`]:(0,n.Z)({transformOrigin:"left center"},t.isRtl?(0,n.Z)({marginRight:"14px"},t.touch&&{marginRight:"24px"}):(0,n.Z)({marginLeft:"14px"},t.touch&&{marginLeft:"24px"})),[`.${R.popper}[data-popper-placement*="top"] &`]:(0,n.Z)({transformOrigin:"center bottom",marginBottom:"14px"},t.touch&&{marginBottom:"24px"}),[`.${R.popper}[data-popper-placement*="bottom"] &`]:(0,n.Z)({transformOrigin:"center top",marginTop:"14px"},t.touch&&{marginTop:"24px"})})),O=(0,s.ZP)("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(e,t)=>t.arrow})(({theme:e})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:e.vars?e.vars.palette.Tooltip.bg:(0,u.Fq)(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}})),L=!1,S=null,N={x:0,y:0};function $(e,t){return o=>{t&&t(o),e(o)}}let B=p.forwardRef(function(e,t){var o,l,u,s,d,w,y,x,R,B,F,W,A,I,j,z,D,U,_;let q=(0,m.Z)({props:e,name:"MuiTooltip"}),{arrow:H=!1,children:X,components:Y={},componentsProps:G={},describeChild:J=!1,disableFocusListener:K=!1,disableHoverListener:Q=!1,disableInteractive:V=!1,disableTouchListener:ee=!1,enterDelay:et=100,enterNextDelay:eo=0,enterTouchDelay:er=700,followCursor:en=!1,id:ep,leaveDelay:ei=0,leaveTouchDelay:el=1500,onClose:ea,onOpen:eu,open:es,placement:ec="bottom",PopperComponent:em,PopperProps:ed={},slotProps:eh={},slots:eg={},title:ef,TransitionComponent:ev=h.Z,TransitionProps:eT}=q,eZ=(0,r.Z)(q,P),eb=(0,c.Z)(),ew="rtl"===eb.direction,[ey,ex]=p.useState(),[eR,eM]=p.useState(null),eP=p.useRef(!1),ek=V||en,eC=p.useRef(),eE=p.useRef(),eO=p.useRef(),eL=p.useRef(),[eS,eN]=(0,b.Z)({controlled:es,default:!1,name:"Tooltip",state:"open"}),e$=eS,eB=(0,T.Z)(ep),eF=p.useRef(),eW=p.useCallback(()=>{void 0!==eF.current&&(document.body.style.WebkitUserSelect=eF.current,eF.current=void 0),clearTimeout(eL.current)},[]);p.useEffect(()=>()=>{clearTimeout(eC.current),clearTimeout(eE.current),clearTimeout(eO.current),eW()},[eW]);let eA=e=>{clearTimeout(S),L=!0,eN(!0),eu&&!e$&&eu(e)},eI=(0,f.Z)(e=>{clearTimeout(S),S=setTimeout(()=>{L=!1},800+ei),eN(!1),ea&&e$&&ea(e),clearTimeout(eC.current),eC.current=setTimeout(()=>{eP.current=!1},eb.transitions.duration.shortest)}),ej=e=>{eP.current&&"touchstart"!==e.type||(ey&&ey.removeAttribute("title"),clearTimeout(eE.current),clearTimeout(eO.current),et||L&&eo?eE.current=setTimeout(()=>{eA(e)},L?eo:et):eA(e))},ez=e=>{clearTimeout(eE.current),clearTimeout(eO.current),eO.current=setTimeout(()=>{eI(e)},ei)},{isFocusVisibleRef:eD,onBlur:eU,onFocus:e_,ref:eq}=(0,Z.Z)(),[,eH]=p.useState(!1),eX=e=>{eU(e),!1===eD.current&&(eH(!1),ez(e))},eY=e=>{ey||ex(e.currentTarget),e_(e),!0===eD.current&&(eH(!0),ej(e))},eG=e=>{eP.current=!0;let t=X.props;t.onTouchStart&&t.onTouchStart(e)},eJ=e=>{eG(e),clearTimeout(eO.current),clearTimeout(eC.current),eW(),eF.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",eL.current=setTimeout(()=>{document.body.style.WebkitUserSelect=eF.current,ej(e)},er)},eK=e=>{X.props.onTouchEnd&&X.props.onTouchEnd(e),eW(),clearTimeout(eO.current),eO.current=setTimeout(()=>{eI(e)},el)};p.useEffect(()=>{if(e$)return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)};function e(e){("Escape"===e.key||"Esc"===e.key)&&eI(e)}},[eI,e$]);let eQ=(0,v.Z)(X.ref,eq,ex,t);ef||0===ef||(e$=!1);let eV=p.useRef(),e0=e=>{let t=X.props;t.onMouseMove&&t.onMouseMove(e),N={x:e.clientX,y:e.clientY},eV.current&&eV.current.update()},e1={},e4="string"==typeof ef;J?(e1.title=e$||!e4||Q?null:ef,e1["aria-describedby"]=e$?eB:null):(e1["aria-label"]=e4?ef:null,e1["aria-labelledby"]=e$&&!e4?eB:null);let e7=(0,n.Z)({},e1,eZ,X.props,{className:(0,i.Z)(eZ.className,X.props.className),onTouchStart:eG,ref:eQ},en?{onMouseMove:e0}:{}),e2={};ee||(e7.onTouchStart=eJ,e7.onTouchEnd=eK),Q||(e7.onMouseOver=$(ej,e7.onMouseOver),e7.onMouseLeave=$(ez,e7.onMouseLeave),ek||(e2.onMouseOver=ej,e2.onMouseLeave=ez)),K||(e7.onFocus=$(eY,e7.onFocus),e7.onBlur=$(eX,e7.onBlur),ek||(e2.onFocus=eY,e2.onBlur=eX));let e8=p.useMemo(()=>{var e;let t=[{name:"arrow",enabled:Boolean(eR),options:{element:eR,padding:4}}];return null!=(e=ed.popperOptions)&&e.modifiers&&(t=t.concat(ed.popperOptions.modifiers)),(0,n.Z)({},ed.popperOptions,{modifiers:t})},[eR,ed]),e6=(0,n.Z)({},q,{isRtl:ew,arrow:H,disableInteractive:ek,placement:ec,PopperComponentProp:em,touch:eP.current}),e9=k(e6),e3=null!=(o=null!=(l=eg.popper)?l:Y.Popper)?o:C,e5=null!=(u=null!=(s=null!=(d=eg.transition)?d:Y.Transition)?s:ev)?u:h.Z,te=null!=(w=null!=(y=eg.tooltip)?y:Y.Tooltip)?w:E,tt=null!=(x=null!=(R=eg.arrow)?R:Y.Arrow)?x:O,to=(0,a.Z)(e3,(0,n.Z)({},ed,null!=(B=eh.popper)?B:G.popper,{className:(0,i.Z)(e9.popper,null==ed?void 0:ed.className,null==(F=null!=(W=eh.popper)?W:G.popper)?void 0:F.className)}),e6),tr=(0,a.Z)(e5,(0,n.Z)({},eT,null!=(A=eh.transition)?A:G.transition),e6),tn=(0,a.Z)(te,(0,n.Z)({},null!=(I=eh.tooltip)?I:G.tooltip,{className:(0,i.Z)(e9.tooltip,null==(j=null!=(z=eh.tooltip)?z:G.tooltip)?void 0:j.className)}),e6),tp=(0,a.Z)(tt,(0,n.Z)({},null!=(D=eh.arrow)?D:G.arrow,{className:(0,i.Z)(e9.arrow,null==(U=null!=(_=eh.arrow)?_:G.arrow)?void 0:U.className)}),e6);return(0,M.jsxs)(p.Fragment,{children:[p.cloneElement(X,e7),(0,M.jsx)(e3,(0,n.Z)({as:null!=em?em:g.Z,placement:ec,anchorEl:en?{getBoundingClientRect:()=>({top:N.y,left:N.x,right:N.x,bottom:N.y,width:0,height:0})}:ey,popperRef:eV,open:!!ey&&e$,id:eB,transition:!0},e2,to,{popperOptions:e8,children:({TransitionProps:e})=>(0,M.jsx)(e5,(0,n.Z)({timeout:eb.transitions.duration.shorter},e,tr,{children:(0,M.jsxs)(te,(0,n.Z)({},tn,{children:[ef,H?(0,M.jsx)(tt,(0,n.Z)({},tp,{ref:eM})):null]}))}))}))]})});var F=B}}]);