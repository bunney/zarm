(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{293:function(n,e,t){"use strict";t.r(e);var i=t(3),s=t.n(i),o=t(4),l=t.n(o),a=t(2),r=t.n(a),c=t(5),u=t.n(c),g=function(n){function e(){var n,i,o,a;l()(this,e);for(var c=arguments.length,u=Array(c),g=0;g<c;g++)u[g]=arguments[g];return i=o=r()(this,(n=e.__proto__||s()(e)).call.apply(n,[this].concat(u))),o.document=function(){return{document:t(502),className:"actionsheet-page"}},a=i,r()(o,a)}return u()(e,n),e}(t(486).a);e.default=g},486:function(n,e,t){"use strict";var i=t(3),s=t.n(i),o=t(4),l=t.n(o),a=t(6),r=t.n(a),c=t(2),u=t.n(c),g=t(5),h=t.n(g),d=t(0),v=t.n(d),p=t(489),b=t.n(p),f=t(490),C=t.n(f),m=(t(491),t(487),function(n){function e(){return l()(this,e),u()(this,(e.__proto__||s()(e)).apply(this,arguments))}return h()(e,n),r()(e,[{key:"render",value:function(){var n=this.document(localStorage.getItem("LANGUAGE")||"zh-CN"),e=n.document,t=n.className;if("string"==typeof e){var i=new b.a.Renderer;i.table=function(n,e){return'<div class="grid-container"><table class="grid"><thead>'+n+"</thead><tbody>"+e+"</tbody></table></div>"},i.code=function(n,e){return'<pre><code class="hljs '+e+'">'+(!(!e||!C.a.getLanguage(e))?C.a.highlight(e,n).value:n)+"</code></pre>"};var s=b()(e,{renderer:i});return v.a.createElement("div",{className:t,dangerouslySetInnerHTML:{__html:s}})}return v.a.createElement("span",null)}}]),e}(d.Component));e.a=m},487:function(n,e,t){},502:function(n,e){n.exports="# 动作面板 ActionSheet\n\n\n\n## 基本用法\n```jsx\nimport { ActionSheet, Cell, Button } from 'zarm';\n\nconst BUTTONS = [\n  {\n    text: '操作一',\n    onClick: () => console.log('点击操作一'),\n  },\n  {\n    text: '操作二',\n    onClick: () => console.log('点击操作二'),\n  },\n  {\n    theme: 'error',\n    text: '操作三',\n    onClick: () => console.log('点击操作三'),\n  },\n];\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      visible1: false,\n      visible2: false,\n      visible3: false,\n    };\n  }\n\n  toggle(key) {\n    this.setState({\n      [`${key}`]: !this.state[key],\n    });\n  }\n\n  render() {\n    return (\n      <div>\n        <Cell\n          description={\n            <Button size=\"xs\" onClick={() => this.toggle('visible1')}>开启</Button>\n          }\n        >\n          普通\n        </Cell>\n        <Cell\n          description={\n            <Button size=\"xs\" onClick={() => this.toggle('visible2')}>开启</Button>\n          }\n        >\n          带取消操作\n        </Cell>\n        <Cell\n          description={\n            <Button size=\"xs\" onClick={() => this.toggle('visible3')}>开启</Button>\n          }\n        >\n          圆角、留边\n        </Cell>\n\n        <ActionSheet\n          visible={this.state.visible1}\n          actions={BUTTONS}\n          onMaskClick={() => this.toggle('visible1')}\n        />\n        <ActionSheet\n          visible={this.state.visible2}\n          actions={BUTTONS}\n          onMaskClick={() => this.toggle('visible2')}\n          onCancel={() => this.toggle('visible2')}\n        />\n        <ActionSheet\n          spacing\n          shape=\"radius\"\n          visible={this.state.visible3}\n          actions={BUTTONS}\n          onMaskClick={() => this.toggle('visible3')}\n          onCancel={() => this.toggle('visible3')}\n        />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| shape | string | 'rect' | 形状，可选值 `rect`、`radius` |\n| visible | boolean | false | 是否显示 |\n| spacing | boolean | false | 是否和外部有间距 |\n| actions | Action[] | [] | 动作列表 |\n| onMaskClick | () => void | - | 点击遮罩层时触发的回调函数 |\n| onCancel | () => void | - | 显示取消菜单，点击时触发的回调函数 |\n| cancelText | string | '取消' | 取消菜单的文案 |\n\n### Action 类型定义\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| text | string | - | 按钮文字 |\n| theme | string | 'default' | 按钮主题，可选值 `default`、`primary`、`success`、`warning`、`error`\n| onClick | () => void | - | 按钮点击后触发的回调函数 |"}}]);