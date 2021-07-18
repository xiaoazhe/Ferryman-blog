import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _543dc3b0 = () => import('..\\pages\\friend\\index.vue' /* webpackChunkName: "pages_friend_index" */).then(m => m.default || m)
const _3f43f95a = () => import('..\\pages\\problem.vue' /* webpackChunkName: "pages_problem" */).then(m => m.default || m)
const _24870462 = () => import('..\\pages\\problem\\index.vue' /* webpackChunkName: "pages_problem_index" */).then(m => m.default || m)
const _16fe750e = () => import('..\\pages\\problem\\problem\\_id.vue' /* webpackChunkName: "pages_problem_problem__id" */).then(m => m.default || m)
const _07d1d634 = () => import('..\\pages\\problem\\label\\_label.vue' /* webpackChunkName: "pages_problem_label__label" */).then(m => m.default || m)
const _29d16602 = () => import('..\\pages\\material\\index.vue' /* webpackChunkName: "pages_material_index" */).then(m => m.default || m)
const _05d8721d = () => import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */).then(m => m.default || m)
const _dd0c34b8 = () => import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages_blog_index" */).then(m => m.default || m)
const _371dcd3e = () => import('..\\pages\\manager.vue' /* webpackChunkName: "pages_manager" */).then(m => m.default || m)
const _7315c7fe = () => import('..\\pages\\manager\\index.vue' /* webpackChunkName: "pages_manager_index" */).then(m => m.default || m)
const _4c109a82 = () => import('..\\pages\\manager\\myreaded.vue' /* webpackChunkName: "pages_manager_myreaded" */).then(m => m.default || m)
const _29a85f1b = () => import('..\\pages\\manager\\myfocus.vue' /* webpackChunkName: "pages_manager_myfocus" */).then(m => m.default || m)
const _f56e55ea = () => import('..\\pages\\manager\\myanswer.vue' /* webpackChunkName: "pages_manager_myanswer" */).then(m => m.default || m)
const _45d869a4 = () => import('..\\pages\\manager\\dynamic.vue' /* webpackChunkName: "pages_manager_dynamic" */).then(m => m.default || m)
const _201f4e1c = () => import('..\\pages\\manager\\account.vue' /* webpackChunkName: "pages_manager_account" */).then(m => m.default || m)
const _b10c98a6 = () => import('..\\pages\\manager\\mycollect.vue' /* webpackChunkName: "pages_manager_mycollect" */).then(m => m.default || m)
const _41be381a = () => import('..\\pages\\manager\\myquestion.vue' /* webpackChunkName: "pages_manager_myquestion" */).then(m => m.default || m)
const _124d2fb7 = () => import('..\\pages\\gossip\\index.vue' /* webpackChunkName: "pages_gossip_index" */).then(m => m.default || m)
const _ef15d98c = () => import('..\\pages\\addProblem.vue' /* webpackChunkName: "pages_addProblem" */).then(m => m.default || m)
const _dcb279fa = () => import('..\\pages\\gossip\\submit.vue' /* webpackChunkName: "pages_gossip_submit" */).then(m => m.default || m)
const _4090a2b2 = () => import('..\\pages\\friend\\submit.vue' /* webpackChunkName: "pages_friend_submit" */).then(m => m.default || m)
const _578cc74e = () => import('..\\pages\\blog\\item\\_id.vue' /* webpackChunkName: "pages_blog_item__id" */).then(m => m.default || m)
const _47fc9842 = () => import('..\\pages\\gossip\\_id.vue' /* webpackChunkName: "pages_gossip__id" */).then(m => m.default || m)
const _3c30cf06 = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)



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
			path: "/friend",
			component: _543dc3b0,
			name: "friend"
		},
		{
			path: "/problem",
			component: _3f43f95a,
			children: [
				{
					path: "",
					component: _24870462,
					name: "problem"
				},
				{
					path: "problem/:id?",
					component: _16fe750e,
					name: "problem-problem-id"
				},
				{
					path: "label/:label?",
					component: _07d1d634,
					name: "problem-label-label"
				}
			]
		},
		{
			path: "/material",
			component: _29d16602,
			name: "material"
		},
		{
			path: "/login",
			component: _05d8721d,
			name: "login"
		},
		{
			path: "/blog",
			component: _dd0c34b8,
			name: "blog"
		},
		{
			path: "/manager",
			component: _371dcd3e,
			children: [
				{
					path: "",
					component: _7315c7fe,
					name: "manager"
				},
				{
					path: "myreaded",
					component: _4c109a82,
					name: "manager-myreaded"
				},
				{
					path: "myfocus",
					component: _29a85f1b,
					name: "manager-myfocus"
				},
				{
					path: "myanswer",
					component: _f56e55ea,
					name: "manager-myanswer"
				},
				{
					path: "dynamic",
					component: _45d869a4,
					name: "manager-dynamic"
				},
				{
					path: "account",
					component: _201f4e1c,
					name: "manager-account"
				},
				{
					path: "mycollect",
					component: _b10c98a6,
					name: "manager-mycollect"
				},
				{
					path: "myquestion",
					component: _41be381a,
					name: "manager-myquestion"
				}
			]
		},
		{
			path: "/gossip",
			component: _124d2fb7,
			name: "gossip"
		},
		{
			path: "/addProblem",
			component: _ef15d98c,
			name: "addProblem"
		},
		{
			path: "/gossip/submit",
			component: _dcb279fa,
			name: "gossip-submit"
		},
		{
			path: "/friend/submit",
			component: _4090a2b2,
			name: "friend-submit"
		},
		{
			path: "/blog/item/:id?",
			component: _578cc74e,
			name: "blog-item-id"
		},
		{
			path: "/gossip/:id",
			component: _47fc9842,
			name: "gossip-id"
		},
		{
			path: "/",
			component: _3c30cf06,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
