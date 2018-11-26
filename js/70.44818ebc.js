(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{479:function(n,e,o){"use strict";o.r(e);var a=o(3),r=o.n(a),t=o(4),s=o.n(t),l=o(2),c=o.n(l),u=o(5),i=o.n(u),d=o(492),h=(o(774),function(n){function e(){var n,a,t,l;s()(this,e);for(var u=arguments.length,i=Array(u),d=0;d<u;d++)i[d]=arguments[d];return a=t=c()(this,(n=e.__proto__||r()(e)).call.apply(n,[this].concat(i))),t.document=function(){return{document:o(528),className:"search-bar-page"}},l=a,c()(t,l)}return i()(e,n),e}(d.a));e.default=h},528:function(n,e){n.exports="# 搜索框 SearchBar\n\n\n\n## 基本用法\n```jsx\nimport { SearchBar } from 'zarm';\n\nclass Demo extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      value: '默认关键字',\n      placeholder: '搜索',\n    };\n  }\n\n  componentDidMount() {\n    setTimeout(() => {\n      this.setState({\n        value: '默认关键字2',\n        placeholder: '搜索你想购买的保险',\n      });\n    }, 0);\n  }\n\n  render() {\n    return (\n      <div>\n        <SearchBar\n          shape=\"round\"\n          placeholder={this.state.placeholder}\n          showCancel={false}\n          onSubmit={(value) => {\n            console.log(`搜索内容为${value}`);\n          }}\n          onFocus={() => {\n            console.log('获取焦点');\n          }}\n          onChange={(value) => {\n            console.log(value);\n          }}\n          onBlur={() => {\n            console.log('失去焦点');\n          }}\n          onClear={() => {\n            console.log('点击了清除');\n          }}\n          onCancel={() => {\n            console.log('点击了取消');\n          }}\n        />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 始终展示取消按钮\n```jsx\nimport { SearchBar } from 'zarm';\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: '',\n    };\n  }\n\n  render() {\n    return (\n      <div>\n        <SearchBar\n          showCancel\n          value={this.state.value}\n          placeholder=\"搜索\"\n          onChange={(value) => {\n            console.log(value);\n            this.setState({\n              value,\n            });\n          }}\n          onClear={(value) => {\n            console.log('清除了 -> ', value);\n            this.setState({\n              value: '',\n            });\n          }}\n        />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 手动获取焦点\n```jsx\nimport { SearchBar, Button } from 'zarm';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <SearchBar\n          shape=\"radius\"\n          cancelText=\"取消\"\n          placeholder=\"搜索\"\n          ref={(ref) => { this.manualFocus = ref; }}\n        />\n        <div className=\"button-wrap\">\n          <Button theme=\"primary\" size=\"xs\" shape=\"radius\" onClick={() => { this.manualFocus.focus(); }}>点击获取焦点</Button>\n        </div>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| placeholder | string | '搜索' | 占位符 |\n| value | string | - | 值 |\n| defaultValue | string | - | 初始值 |\n| shape | string | - | 形状，可选值 `radius`, `round` |\n| disabled | boolean | false | 是否禁用 |\n| showCancel | boolean | false | 是否一直展示取消按钮 |\n| cancelText | string | '取消' | 取消按钮显示的内容 |\n| maxLength | number | - | 输入字数上限 |\n| clearable | boolean | true | 是否提供清空输入框功能 |\n| onChange | (value?: string) => void | - | 值变化时触发的回调函数 |\n| onSubmit | (value?: string) => void | - | 提交时触发的回调函数 |\n| onFocus | () => void | - | 获取焦点时触发的回调函数 |\n| onBlur | () => void | - | 失去焦点时触发的回调函数 |\n| onClear | () => void | - | 点击清除按钮时触发的回调函数 |\n| onCancel | () => void | - | 点击取消时触发的回调函数 |\n"},774:function(n,e,o){}}]);