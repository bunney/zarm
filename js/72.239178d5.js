(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{481:function(n,e,t){"use strict";t.r(e);var r=t(3),s=t.n(r),i=t(4),l=t.n(i),o=t(2),p=t.n(o),a=t(5),u=t.n(a),c=function(n){function e(){var n,r,i,o;l()(this,e);for(var a=arguments.length,u=Array(a),c=0;c<a;c++)u[c]=arguments[c];return r=i=p()(this,(n=e.__proto__||s()(e)).call.apply(n,[this].concat(u))),i.document=function(){return{document:t(530),className:"stepper-page"}},o=r,p()(i,o)}return u()(e,n),e}(t(492).a);e.default=c},530:function(n,e){n.exports='# 步进器 Stepper\n\n\n\n## 基本用法\n```jsx\nimport { Cell, Stepper } from \'zarm\';\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: 1,\n    };\n  }\n\n  render() {\n    return (\n      <div>\n        <Cell\n          title="普通"\n          description={\n            <Stepper\n              value={this.state.value}\n              onChange={(value) => {\n                console.log(value);\n              }}\n            />\n          }\n        />\n\n        <Cell\n          title="小号"\n          description={\n            <Stepper\n              size="sm"\n              value={this.state.value}\n              onChange={(value) => {\n                console.log(value);\n              }}\n            />\n          }\n        />\n\n        <Cell\n          title="设置默认值"\n          description={\n            <Stepper size="sm" defaultValue={2} />\n          }\n        />\n\n        <Cell\n          title="设置上下限"\n          description={\n            <Stepper size="sm" min={-3} max={3} />\n          }\n        />\n\n        <Cell\n          title="设置步长"\n          description={\n            <Stepper size="sm" step={5} />\n          }\n        />\n\n        <Cell\n          title="禁用状态"\n          description={\n            <Stepper size="sm" disabled />\n          }\n        />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 多形状\n```jsx\nimport { Cell, Stepper } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Cell\n          title="圆角"\n          description={\n            <Stepper size="sm" shape="radius" />\n          }\n        />\n\n        <Cell\n          title="圆形"\n          description={\n            <Stepper size="sm" shape="circle" />\n          }\n        />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| shape | string | \'rect\' | 形状，可选值 `rect`, `radius`, `circle` |\n| size | string | \'md\' | 大小，可选值 `md`、`sm` |\n| value | number | - | 值 |\n| defaultValue | number | - | 初始值 |\n| min | number | - | 最小值 |\n| max | number | - | 最大值 |\n| step | number | 1 | 步长 |\n| disabled | boolean | false | 是否禁用 |\n| onInputChange | (value?: number) => void | - | 输入值变化时触发的回调函数 |\n| onChange | (value?: number) => void | - | 值变化时触发的回调函数 |\n'}}]);