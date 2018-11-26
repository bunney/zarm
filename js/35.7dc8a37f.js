(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{322:function(n,e,o){"use strict";o.r(e);var t=o(3),l=o.n(t),r=o(4),i=o.n(r),a=o(2),c=o.n(a),s=o(5),u=o.n(s),m=function(n){function e(){var n,t,r,a;i()(this,e);for(var s=arguments.length,u=Array(s),m=0;m<s;m++)u[m]=arguments[m];return t=r=c()(this,(n=e.__proto__||l()(e)).call.apply(n,[this].concat(u))),r.document=function(){return{document:o(531),className:"swipe-action-page"}},a=t,c()(r,a)}return u()(e,n),e}(o(486).a);e.default=m},486:function(n,e,o){"use strict";var t=o(3),l=o.n(t),r=o(4),i=o.n(r),a=o(6),c=o.n(a),s=o(2),u=o.n(s),m=o(5),p=o.n(m),d=o(0),g=o.n(d),h=o(489),f=o.n(h),C=o(490),v=o.n(C),w=(o(491),o(487),function(n){function e(){return i()(this,e),u()(this,(e.__proto__||l()(e)).apply(this,arguments))}return p()(e,n),c()(e,[{key:"render",value:function(){var n=this.document(localStorage.getItem("LANGUAGE")||"zh-CN"),e=n.document,o=n.className;if("string"==typeof e){var t=new f.a.Renderer;t.table=function(n,e){return'<div class="grid-container"><table class="grid"><thead>'+n+"</thead><tbody>"+e+"</tbody></table></div>"},t.code=function(n,e){return'<pre><code class="hljs '+e+'">'+(!(!e||!v.a.getLanguage(e))?v.a.highlight(e,n).value:n)+"</code></pre>"};var l=f()(e,{renderer:t});return g.a.createElement("div",{className:o,dangerouslySetInnerHTML:{__html:l}})}return g.a.createElement("span",null)}}]),e}(d.Component));e.a=w},487:function(n,e,o){},531:function(n,e){n.exports='# 滑动操作 SwipeAction\n\n\n\n## 基本用法\n```jsx\nimport { SwipeAction, Button, Cell } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <SwipeAction\n          right={[\n            <Button size="lg" theme="primary" onClick={() => console.log(\'右按钮1\')}>右按钮1</Button>,\n            <Button size="lg" theme="error" onClick={() => console.log(\'右按钮2\')}>右按钮2</Button>,\n          ]}\n        >\n          <Cell>左滑看看</Cell>\n        </SwipeAction>\n\n        <SwipeAction\n          left={[\n            <Button size="lg" theme="primary" onClick={() => console.log(\'左按钮1\')}>左按钮1</Button>,\n            <Button size="lg" theme="error" onClick={() => console.log(\'左按钮2\')}>左按钮2</Button>,\n          ]}\n        >\n          <Cell>右滑看看</Cell>\n        </SwipeAction>\n\n        <SwipeAction\n          autoClose\n          left={[\n            <Button size="lg" theme="primary" onClick={() => console.log(\'左按钮1\')}>左按钮1</Button>,\n            <Button size="lg" theme="warning" onClick={() => console.log(\'左按钮2\')}>左按钮2</Button>,\n          ]}\n          right={[\n            <Button size="lg" theme="error" onClick={() => console.log(\'右按钮1\')}>右按钮2</Button>,\n          ]}\n          onOpen={() => console.log(\'open\')}\n          onClose={() => console.log(\'close\')}\n        >\n          <Cell>左右都能滑动（自动关闭）</Cell>\n        </SwipeAction>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| left | object[] | [] | 左侧按钮组 |\n| right | object[] | [] | 右侧按钮组 |\n| moveDistanceRatio | number | 0.5 | 移动距离比例临界点 |\n| moveTimeSpan | number | 300 | 移动时间跨度临界点 |\n| animationDuration | number | 300 | 动画执行时间，单位：毫秒 |\n| offset | number | 10 | 回弹偏移的距离 |\n| autoClose | boolean | true | 点击按钮后是否自动关闭 | \n| disabled | boolean | false | 是否允许滑动 |\n| onOpen | () => void | - | 滑开时触发的回调函数 |\n| onClose | () => void | - | 关闭时触发的回调函数 |\n'}}]);