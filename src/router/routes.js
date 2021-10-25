const requireComponent = require.context(
  // The relative path of the components folder
  '../markdowns/stories',
  // Whether or not to look in subfolders
  false,
  // The regular expression used to match base component filenames
  /Base[A-Z]\w+\.(md)$/
)
requireComponent.keys().forEach((fileName) => {
  // Get the component config
  const componentConfig = requireComponent(fileName)
  // Get the PascalCase version of the component name
  const componentName = fileName
    // Remove the "./_" from the beginning
    .replace(/^\.\/_/, '')
    // Remove the file extension from the end
    .replace(/\.\w+$/, '')
    // Split up kebabs
    .split('-')
    // Upper case
    .map((kebab) => kebab.charAt(0).toUpperCase() + kebab.slice(1))
    // Concatenated
    .join('')
  
  console.log(componentName)

  // Globally register the component
  Vue.component(componentName, componentConfig.default || componentConfig)
})



const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: ':markdown',component: () => import('pages/Post.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
