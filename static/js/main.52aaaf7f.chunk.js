(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(e,t,n){e.exports={button:"FeedbackOptions_button__2pYf-",button_good:"FeedbackOptions_button_good__203O0",button_bad:"FeedbackOptions_button_bad__hf7oC"}},,,,,,function(e,t,n){e.exports={container:"App_container__1ECDn"}},,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),o=n.n(c),r=n(4),i=n.n(r),s=(n(16),n(17),n(5)),b=n(6),d=n(7),u=n(10),l=n(9);n(18);function j(e){var t=e.title,n=e.children;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:t}),n]})}var h=n(2),O=n.n(h),v=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(a.jsx)(c.Fragment,{children:t.map((function(e){var t=[O.a.button];return"good"===e&&t.push(O.a.button_good),"bad"===e&&t.push(O.a.button_bad),Object(a.jsx)("button",{className:t.join(" "),type:"button",name:e,onClick:n,children:e},e)}))})};function f(e){var t=e.message;return Object(a.jsx)("p",{children:t})}n(19);function p(e){var t=e.good,n=e.neutral,c=e.bad,o=e.total,r=e.positivePercentage;return Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{children:["Good: ",t]}),Object(a.jsxs)("li",{children:["Neutral: ",n]}),Object(a.jsxs)("li",{children:["Bad: ",c]}),Object(a.jsxs)("li",{children:["Total: ",o]}),Object(a.jsxs)("li",{children:["Positive feedback: ",r,"%"]})]})}var g=n(8),k=n.n(g),x=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.leaveFeedback=function(t){var n=t.target.name;e.setState((function(e){return Object(s.a)({},n,e[n]+1)}))},e.countTotalFeedback=function(){return e.state.good+e.state.neutral+e.state.bad},e.countPositiveFeedbackPercentage=function(){var t=e.state.good;return t&&Math.round(100*t/e.countTotalFeedback())},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad,o=this.countTotalFeedback();return Object(a.jsxs)("div",{className:k.a.container,children:[Object(a.jsx)(j,{title:"Please leave feedback",children:Object(a.jsx)(v,{options:Object.keys(this.state),onLeaveFeedback:this.leaveFeedback})}),Object(a.jsx)(j,{title:"Statistics",children:0===o?Object(a.jsx)(f,{message:"No feedback given"}):Object(a.jsx)(p,{good:t,neutral:n,bad:c,total:o,positivePercentage:this.countPositiveFeedbackPercentage()})})]})}}]),n}(c.Component);i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.52aaaf7f.chunk.js.map