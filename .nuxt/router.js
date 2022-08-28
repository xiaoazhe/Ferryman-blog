import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _7219df52 = () => import('..\\pages\\addProblem.vue' /* webpackChunkName: "pages_addProblem" */).then(m => m.default || m)
const _4722c6e8 = () => import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages_blog_index" */).then(m => m.default || m)
const _3683bb10 = () => import('..\\pages\\friend\\index.vue' /* webpackChunkName: "pages_friend_index" */).then(m => m.default || m)
const _72efcc9f = () => import('..\\pages\\gossip\\index.vue' /* webpackChunkName: "pages_gossip_index" */).then(m => m.default || m)
const _0e8b11f6 = () => import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */).then(m => m.default || m)
const _b234f76e = () => import('..\\pages\\manager.vue' /* webpackChunkName: "pages_manager" */).then(m => m.default || m)
const _7a261c19 = () => import('..\\pages\\manager\\index.vue' /* webpackChunkName: "pages_manager_index" */).then(m => m.default || m)
const _a8deaf98 = () => import('..\\pages\\manager\\account.vue' /* webpackChunkName: "pages_manager_account" */).then(m => m.default || m)
const _68852546 = () => import('..\\pages\\manager\\dynamic.vue' /* webpackChunkName: "pages_manager_dynamic" */).then(m => m.default || m)
const _6802bdf3 = () => import('..\\pages\\manager\\myanswer.vue' /* webpackChunkName: "pages_manager_myanswer" */).then(m => m.default || m)
const _1bfce7c5 = () => import('..\\pages\\manager\\mycollect.vue' /* webpackChunkName: "pages_manager_mycollect" */).then(m => m.default || m)
const _95cc8d9a = () => import('..\\pages\\manager\\myfocus.vue' /* webpackChunkName: "pages_manager_myfocus" */).then(m => m.default || m)
const _09f79a4a = () => import('..\\pages\\manager\\myquestion.vue' /* webpackChunkName: "pages_manager_myquestion" */).then(m => m.default || m)
const _2eca836a = () => import('..\\pages\\manager\\myreaded.vue' /* webpackChunkName: "pages_manager_myreaded" */).then(m => m.default || m)
const _a4f36032 = () => import('..\\pages\\material\\index.vue' /* webpackChunkName: "pages_material_index" */).then(m => m.default || m)
const _ba5b238a = () => import('..\\pages\\problem.vue' /* webpackChunkName: "pages_problem" */).then(m => m.default || m)
const _bd250432 = () => import('..\\pages\\problem\\index.vue' /* webpackChunkName: "pages_problem_index" */).then(m => m.default || m)
const _55327cfe = () => import('..\\pages\\problem\\label\\_label.vue' /* webpackChunkName: "pages_problem_label__label" */).then(m => m.default || m)
const _716cac14 = () => import('..\\pages\\problem\\problem\\_id.vue' /* webpackChunkName: "pages_problem_problem__id" */).then(m => m.default || m)
const _177cba6c = () => import('..\\pages\\friend\\submit.vue' /* webpackChunkName: "pages_friend_submit" */).then(m => m.default || m)
const _4557c31b = () => import('..\\pages\\gossip\\submit.vue' /* webpackChunkName: "pages_gossip_submit" */).then(m => m.default || m)
const _45131518 = () => import('..\\pages\\music\\music.vue' /* webpackChunkName: "pages_music_music" */).then(m => m.default || m)
const _d2aec17e = () => import('..\\pages\\blog\\item\\_id.vue' /* webpackChunkName: "pages_blog_item__id" */).then(m => m.default || m)
const _26f66ac7 = () => import('..\\pages\\gossip\\_id.vue' /* webpackChunkName: "pages_gossip__id" */).then(m => m.default || m)
const _2f12d3ee = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)



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
			component: _7219df52,
			name: "addProblem"
		},
		{
			path: "/blog",
			component: _4722c6e8,
			name: "blog"
		},
		{
			path: "/friend",
			component: _3683bb10,
			name: "friend"
		},
		{
			path: "/gossip",
			component: _72efcc9f,
			name: "gossip"
		},
		{
			path: "/login",
			component: _0e8b11f6,
			name: "login"
		},
		{
			path: "/manager",
			component: _b234f76e,
			children: [
				{
					path: "",
					component: _7a261c19,
					name: "manager"
				},
				{
					path: "account",
					component: _a8deaf98,
					name: "manager-account"
				},
				{
					path: "dynamic",
					component: _68852546,
					name: "manager-dynamic"
				},
				{
					path: "myanswer",
					component: _6802bdf3,
					name: "manager-myanswer"
				},
				{
					path: "mycollect",
					component: _1bfce7c5,
					name: "manager-mycollect"
				},
				{
					path: "myfocus",
					component: _95cc8d9a,
					name: "manager-myfocus"
				},
				{
					path: "myquestion",
					component: _09f79a4a,
					name: "manager-myquestion"
				},
				{
					path: "myreaded",
					component: _2eca836a,
					name: "manager-myreaded"
				}
			]
		},
		{
			path: "/material",
			component: _a4f36032,
			name: "material"
		},
		{
			path: "/problem",
			component: _ba5b238a,
			children: [
				{
					path: "",
					component: _bd250432,
					name: "problem"
				},
				{
					path: "label/:label?",
					component: _55327cfe,
					name: "problem-label-label"
				},
				{
					path: "problem/:id?",
					component: _716cac14,
					name: "problem-problem-id"
				}
			]
		},
		{
			path: "/friend/submit",
			component: _177cba6c,
			name: "friend-submit"
		},
		{
			path: "/gossip/submit",
			component: _4557c31b,
			name: "gossip-submit"
		},
		{
			path: "/music/music",
			component: _45131518,
			name: "music-music"
		},
		{
			path: "/blog/item/:id?",
			component: _d2aec17e,
			name: "blog-item-id"
		},
		{
			path: "/gossip/:id",
			component: _26f66ac7,
			name: "gossip-id"
		},
		{
			path: "/",
			component: _2f12d3ee,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
