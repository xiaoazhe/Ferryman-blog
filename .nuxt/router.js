import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _4d204bd4 = () => import('../pages/addProblem.vue' /* webpackChunkName: "pages/addProblem" */).then(m => m.default || m)
const _276881bb = () => import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */).then(m => m.default || m)
const _0eca6a37 = () => import('../pages/friend/index.vue' /* webpackChunkName: "pages/friend/index" */).then(m => m.default || m)
const _d6432a70 = () => import('../pages/gossip/index.vue' /* webpackChunkName: "pages/gossip/index" */).then(m => m.default || m)
const _c6c27d7a = () => import('../pages/login.vue' /* webpackChunkName: "pages/login" */).then(m => m.default || m)
const _3a3f91f2 = () => import('../pages/manager.vue' /* webpackChunkName: "pages/manager" */).then(m => m.default || m)
const _37b31c4a = () => import('../pages/manager/index.vue' /* webpackChunkName: "pages/manager/index" */).then(m => m.default || m)
const _39de6025 = () => import('../pages/manager/account.vue' /* webpackChunkName: "pages/manager/account" */).then(m => m.default || m)
const _125a4592 = () => import('../pages/manager/dynamic.vue' /* webpackChunkName: "pages/manager/dynamic" */).then(m => m.default || m)
const _b927f7bc = () => import('../pages/manager/myanswer.vue' /* webpackChunkName: "pages/manager/myanswer" */).then(m => m.default || m)
const _4dbc6776 = () => import('../pages/manager/mycollect.vue' /* webpackChunkName: "pages/manager/mycollect" */).then(m => m.default || m)
const _43677124 = () => import('../pages/manager/myfocus.vue' /* webpackChunkName: "pages/manager/myfocus" */).then(m => m.default || m)
const _0134a94a = () => import('../pages/manager/myquestion.vue' /* webpackChunkName: "pages/manager/myquestion" */).then(m => m.default || m)
const _6a33c999 = () => import('../pages/manager/myreaded.vue' /* webpackChunkName: "pages/manager/myreaded" */).then(m => m.default || m)
const _55416600 = () => import('../pages/material/index.vue' /* webpackChunkName: "pages/material/index" */).then(m => m.default || m)
const _4265be0e = () => import('../pages/problem.vue' /* webpackChunkName: "pages/problem" */).then(m => m.default || m)
const _203148bc = () => import('../pages/problem/index.vue' /* webpackChunkName: "pages/problem/index" */).then(m => m.default || m)
const _6fdf8514 = () => import('../pages/problem/label/_label.vue' /* webpackChunkName: "pages/problem/label/_label" */).then(m => m.default || m)
const _d6b36e98 = () => import('../pages/problem/problem/_id.vue' /* webpackChunkName: "pages/problem/problem/_id" */).then(m => m.default || m)
const _24d0d883 = () => import('../pages/friend/submit.vue' /* webpackChunkName: "pages/friend/submit" */).then(m => m.default || m)
const _613cea12 = () => import('../pages/gossip/submit.vue' /* webpackChunkName: "pages/gossip/submit" */).then(m => m.default || m)
const _77ffbf65 = () => import('../pages/blog/item/_id.vue' /* webpackChunkName: "pages/blog/item/_id" */).then(m => m.default || m)
const _49187f30 = () => import('../pages/gossip/_id.vue' /* webpackChunkName: "pages/gossip/_id" */).then(m => m.default || m)
const _5a11c3a8 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/addProblem",
			component: _4d204bd4,
			name: "addProblem"
		},
		{
			path: "/blog",
			component: _276881bb,
			name: "blog"
		},
		{
			path: "/friend",
			component: _0eca6a37,
			name: "friend"
		},
		{
			path: "/gossip",
			component: _d6432a70,
			name: "gossip"
		},
		{
			path: "/login",
			component: _c6c27d7a,
			name: "login"
		},
		{
			path: "/manager",
			component: _3a3f91f2,
			children: [
				{
					path: "",
					component: _37b31c4a,
					name: "manager"
				},
				{
					path: "account",
					component: _39de6025,
					name: "manager-account"
				},
				{
					path: "dynamic",
					component: _125a4592,
					name: "manager-dynamic"
				},
				{
					path: "myanswer",
					component: _b927f7bc,
					name: "manager-myanswer"
				},
				{
					path: "mycollect",
					component: _4dbc6776,
					name: "manager-mycollect"
				},
				{
					path: "myfocus",
					component: _43677124,
					name: "manager-myfocus"
				},
				{
					path: "myquestion",
					component: _0134a94a,
					name: "manager-myquestion"
				},
				{
					path: "myreaded",
					component: _6a33c999,
					name: "manager-myreaded"
				}
			]
		},
		{
			path: "/material",
			component: _55416600,
			name: "material"
		},
		{
			path: "/problem",
			component: _4265be0e,
			children: [
				{
					path: "",
					component: _203148bc,
					name: "problem"
				},
				{
					path: "label/:label?",
					component: _6fdf8514,
					name: "problem-label-label"
				},
				{
					path: "problem/:id?",
					component: _d6b36e98,
					name: "problem-problem-id"
				}
			]
		},
		{
			path: "/friend/submit",
			component: _24d0d883,
			name: "friend-submit"
		},
		{
			path: "/gossip/submit",
			component: _613cea12,
			name: "gossip-submit"
		},
		{
			path: "/blog/item/:id?",
			component: _77ffbf65,
			name: "blog-item-id"
		},
		{
			path: "/gossip/:id",
			component: _49187f30,
			name: "gossip-id"
		},
		{
			path: "/",
			component: _5a11c3a8,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
