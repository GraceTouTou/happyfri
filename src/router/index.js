import App from '../App'

// 嵌套路由+懒加载
export default [{
  path: '/',
  component: App,
  children: [{
    path: '',
    component: r => require.ensure([], () => r(require('../page/home')), 'home')
  }, {
    component: r => require.ensure([], () => r(require('../page/item')), 'item')
  }]
}]
