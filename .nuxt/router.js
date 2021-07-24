import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _5d046470 = () => import('../pages/addProblem.vue' /* webpackChunkName: "pages/addProblem" */).then(m => m.default || m)
const _a873f8a2 = () => import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */).then(m => m.default || m)
const _1c6181aa = () => import('../pages/friend/index.vue' /* webpackChunkName: "pages/friend/index" */).then(m => m.default || m)
const _77e33fbc = () => import('../pages/gossip/index.vue' /* webpackChunkName: "pages/gossip/index" */).then(m => m.default || m)
const _55acd6cf = () => import('../pages/login.vue' /* webpackChunkName: "pages/login" */).then(m => m.default || m)
const _de81ccda = () => import('../pages/manager.vue' /* webpackChunkName: "pages/manager" */).then(m => m.default || m)
const _956e3454 = () => import('../pages/manager/index.vue' /* webpackChunkName: "pages/manager/index" */).then(m => m.default || m)
const _adb0129e = () => import('../pages/manager/account.vue' /* webpackChunkName: "pages/manager/account" */).then(m => m.default || m)
const _661c73c3 = () => import('../pages/manager/dynamic.vue' /* webpackChunkName: "pages/manager/dynamic" */).then(m => m.default || m)
const _1d553f16 = () => import('../pages/manager/myanswer.vue' /* webpackChunkName: "pages/manager/myanswer" */).then(m => m.default || m)
const _10fa8b02 = () => import('../pages/manager/mycollect.vue' /* webpackChunkName: "pages/manager/mycollect" */).then(m => m.default || m)
const _9a9df0a0 = () => import('../pages/manager/myfocus.vue' /* webpackChunkName: "pages/manager/myfocus" */).then(m => m.default || m)
const _b48a1184 = () => import('../pages/manager/myquestion.vue' /* webpackChunkName: "pages/manager/myquestion" */).then(m => m.default || m)
const _37c5f6e6 = () => import('../pages/manager/myreaded.vue' /* webpackChunkName: "pages/manager/myreaded" */).then(m => m.default || m)
const _eb366418 = () => import('../pages/material/index.vue' /* webpackChunkName: "pages/material/index" */).then(m => m.default || m)
const _e6a7f8f6 = () => import('../pages/problem.vue' /* webpackChunkName: "pages/problem" */).then(m => m.default || m)
const _c471db70 = () => import('../pages/problem/index.vue' /* webpackChunkName: "pages/problem/index" */).then(m => m.default || m)
const _643ade6a = () => import('../pages/problem/label/_label.vue' /* webpackChunkName: "pages/problem/label/_label" */).then(m => m.default || m)
const _fe2c8d80 = () => import('../pages/problem/problem/_id.vue' /* webpackChunkName: "pages/problem/problem/_id" */).then(m => m.default || m)
const _bb32bbe2 = () => import('../pages/friend/submit.vue' /* webpackChunkName: "pages/friend/submit" */).then(m => m.default || m)
const _425a98c4 = () => import('../pages/gossip/submit.vue' /* webpackChunkName: "pages/gossip/submit" */).then(m => m.default || m)
const _68ec6da1 = () => import('../pages/music/music.vue' /* webpackChunkName: "pages/music/music" */).then(m => m.default || m)
const _14d4ee1e = () => import('../pages/blog/item/_id.vue' /* webpackChunkName: "pages/blog/item/_id" */).then(m => m.default || m)
const _6513fdb8 = () => import('../pages/gossip/_id.vue' /* webpackChunkName: "pages/gossip/_id" */).then(m => m.default || m)
const _e7f59890 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



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
			component: _5d046470,
			name: "addProblem"
		},
		{
			path: "/blog",
			component: _a873f8a2,
			name: "blog"
		},
		{
			path: "/friend",
			component: _1c6181aa,
			name: "friend"
		},
		{
			path: "/gossip",
			component: _77e33fbc,
			name: "gossip"
		},
		{
			path: "/login",
			component: _55acd6cf,
			name: "login"
		},
		{
			path: "/manager",
			component: _de81ccda,
			children: [
				{
					path: "",
					component: _956e3454,
					name: "manager"
				},
				{
					path: "account",
					component: _adb0129e,
					name: "manager-account"
				},
				{
					path: "dynamic",
					component: _661c73c3,
					name: "manager-dynamic"
				},
				{
					path: "myanswer",
					component: _1d553f16,
					name: "manager-myanswer"
				},
				{
					path: "mycollect",
					component: _10fa8b02,
					name: "manager-mycollect"
				},
				{
					path: "myfocus",
					component: _9a9df0a0,
					name: "manager-myfocus"
				},
				{
					path: "myquestion",
					component: _b48a1184,
					name: "manager-myquestion"
				},
				{
					path: "myreaded",
					component: _37c5f6e6,
					name: "manager-myreaded"
				}
			]
		},
		{
			path: "/material",
			component: _eb366418,
			name: "material"
		},
		{
			path: "/problem",
			component: _e6a7f8f6,
			children: [
				{
					path: "",
					component: _c471db70,
					name: "problem"
				},
				{
					path: "label/:label?",
					component: _643ade6a,
					name: "problem-label-label"
				},
				{
					path: "problem/:id?",
					component: _fe2c8d80,
					name: "problem-problem-id"
				}
			]
		},
		{
			path: "/friend/submit",
			component: _bb32bbe2,
			name: "friend-submit"
		},
		{
			path: "/gossip/submit",
			component: _425a98c4,
			name: "gossip-submit"
		},
		{
			path: "/music/music",
			component: _68ec6da1,
			name: "music-music"
		},
		{
			path: "/blog/item/:id?",
			component: _14d4ee1e,
			name: "blog-item-id"
		},
		{
			path: "/gossip/:id",
			component: _6513fdb8,
			name: "gossip-id"
		},
		{
			path: "/",
			component: _e7f59890,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
