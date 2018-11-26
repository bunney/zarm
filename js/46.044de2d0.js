(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{455:function(n,e,a){"use strict";a.r(e);var s=a(3),t=a.n(s),d=a(4),o=a.n(d),r=a(2),i=a.n(r),c=a(5),m=a.n(c),l=a(492),p=(a(742),function(n){function e(){var n,s,d,r;o()(this,e);for(var c=arguments.length,m=Array(c),l=0;l<c;l++)m[l]=arguments[l];return s=d=i()(this,(n=e.__proto__||t()(e)).call.apply(n,[this].concat(m))),d.document=function(){return{document:a(504),className:"badge-page"}},r=s,i()(d,r)}return m()(e,n),e}(l.a));e.default=p},504:function(n,e){n.exports='# 徽标 Badge\n\n\n\n## 基本用法\n```jsx\nimport { Badge, Cell } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Cell hasArrow title="点状" description={<Badge />} onClick={() => {}} />\n        <Cell hasArrow title="直角" description={<Badge shape="rect" text="免费" />} onClick={() => {}} />\n        <Cell hasArrow title="圆角" description={<Badge shape="radius" text="new" />} onClick={() => {}} />\n        <Cell hasArrow title="椭圆角" description={<Badge shape="round" text="999+" />} onClick={() => {}} />\n        <Cell hasArrow title="圆形" description={<Badge shape="circle" text={3} />} onClick={() => {}} />\n        <Cell hasArrow title="叶形" description={<Badge shape="leaf" text="新品" />} onClick={() => {}} />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 多主题\n```jsx\nimport { Badge } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div className="custom-panel">\n        <div className="box">\n          <Badge theme="primary" />\n        </div>\n        <div className="box">\n          <Badge theme="success" />\n        </div>\n        <div className="box">\n          <Badge theme="warning" />\n        </div>\n        <div className="box">\n          <Badge theme="error" />\n        </div>\n        <div className="box">\n          <Badge shape="round" text="999+" theme="primary" />\n        </div>\n        <div className="box">\n          <Badge shape="round" text="999+" theme="success" />\n        </div>\n        <div className="box">\n          <Badge shape="round" text="999+" theme="warning" />\n        </div>\n        <div className="box">\n          <Badge shape="round" text="999+" theme="error" />\n        </div>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n\n## 上标位置\n```jsx\nimport { Badge } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div className="custom-panel">\n        <div className="box">\n          <Badge sup shape="dot"><div className="box-item" /></Badge>\n        </div>\n        <div className="box">\n          <Badge sup shape="rect" text="免费"><div className="box-item" /></Badge>\n        </div>\n        <div className="box">\n          <Badge sup shape="radius" text="new"><div className="box-item" /></Badge>\n        </div>\n        <div className="box">\n          <Badge sup shape="round" text="999+"><div className="box-item" /></Badge>\n        </div>\n        <div className="box">\n          <Badge sup shape="circle" text="3"><div className="box-item" /></Badge>\n        </div>\n        <div className="box">\n          <Badge sup shape="leaf" text="新品"><div className="box-item" /></Badge>\n        </div>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 文本示例\n```jsx\nimport { Badge } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div className="text-panel">\n        <div className="box">\n          <Badge sup shape="dot"><span className="box-text">邀请有奖</span></Badge>\n        </div>\n        <div className="box">\n          <span className="box-text">邀请有奖</span><Badge sup shape="dot"/>\n        </div>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| theme | string | \'error\' | 设置主题，可选值为 `default`、`primary`、`info`、`success`、`warning`、`error` |\n| shape | string | \'dot\' | 设置形状，可选值为 `dot`、`rect` 、`radius`、`round`、`circle`、`leaf` |\n| sup | bool | false | 是否上标位置 |\n| text | string | - | 设置显示的文字 |\n\n'},742:function(n,e,a){}}]);