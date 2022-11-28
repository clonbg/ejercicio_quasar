<template>
	<q-layout view="lHh Lpr lFf">
		<q-header elevated>
			<q-toolbar>
				<q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
				<q-toolbar-title>
					<div class="flex">
						<span class="q-px-md cursor-pointer" @click="volver">El blog de Clonbg</span>
					</div>
				</q-toolbar-title>
				<q-input borderless v-model="busqueda" autofocus placeholder="Buscar" class="q-px-md" style="width : 15rem ; font-size : 1.2rem" v-if="($route.path=='/') && (!verBusqueda)" standout="text-black" />
				<q-btn flat round dense icon="search" v-if="($route.path=='/') && (verBusqueda)" class="q-mr-xs" @click="verBusqueda = false" />
				<q-btn flat round dense icon="cancel" v-if="($route.path=='/') && (!verBusqueda)" class="q-mr-xs" @click="(verBusqueda = true) ; (busqueda = '') ; (scrollToTop())" />
				<div>
					<img src="/del_blog/kiss.png" style="width:6rem" class="q-pa-md" />
				</div>
			</q-toolbar>
		</q-header>
		<q-drawer v-model="leftDrawerOpen" show-if-above bordered>
			<q-list>
				<q-item-label header>
					Links de utilidad
				</q-item-label>
				<EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
			</q-list>
		</q-drawer>
		<q-page-container>
			<router-view />
		</q-page-container>
	</q-layout>
</template>
<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [{
		title: 'Blog hecho con: ',
		caption: 'quasar.dev',
		icon: 'school',
		link: 'https://quasar.dev'
	},
	{
		title: 'Mi Github',
		caption: 'github.com/clonbg',
		icon: 'code',
		link: 'https://github.com/clonbg'
	},
	{
		title: 'Mastodon',
		caption: '@clonbg@masto.es',
		icon: 'insert_comment',
		link: 'https://masto.es/@clonbg'
	},
	{
		title: 'RSS feed',
		caption: 'RSS',
		icon: 'rss_feed',
		link: `${window.location.origin}/feedClonbg_es.xml`
	}
];

import { defineComponent, ref } from 'vue'

export default defineComponent({
	name: 'MainLayout',

	components: {
		EssentialLink
	},

	setup() {
		const leftDrawerOpen = ref(false)
		let busqueda = ref('')
		let verBusqueda = ref(true)
		let url = ref('')

		return {
			essentialLinks: linksList,
			leftDrawerOpen,
			toggleLeftDrawer() {
				leftDrawerOpen.value = !leftDrawerOpen.value
			},
			busqueda,
			verBusqueda,
			url
		}
	},
	watch: {
		'busqueda': 'updateBusqueda',
		'$route.path': 'borrarBusqueda'
	},
	methods: {
		updateBusqueda() {
			this.$store.commit('user/updateBusqueda', this.busqueda)
		},
		borrarBusqueda() {
			if (this.$route.path != '/') {
				this.busqueda = ''
				this.verBusqueda = true
			}
		},
		scrollToTop() {
			window.scrollTo(0, 0);
		},
		volver() {
			this.$router.push({ path: '/' });
		},
	},
	mounted() {
		this.url = window.location
		console.log('window: ', this.url)
	}
})

</script>
