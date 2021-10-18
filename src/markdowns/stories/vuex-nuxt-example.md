# Ejemplo de Vuex con Nuxt
#### 31/08/2020

Si no sabéis lo que es *Vuex* o *Nuxt* os diré que "Vuex es un complemento oficial para Vue.js que ofrece un almacén de datos centralizado para usar dentro de su aplicación", en pocas palabras es como tener *variables globales* en toda la aplicación. Y *Nuxt* "es un framework web gratuito y de código abierto basado en Vue.js, Node.js, Webpack y Babel.js".

He estado trabajando en un ejemplo de como funcionan estas dos librerías.

Primero va el archivo ```store/index.js``` que corresponde a *Vuex*, en el *state* he creado un array llamado 'datos', cada objeto del array tiene una 'id' y un 'titulo'.

```
export const state = () => ({
  counter: 0,
  datos: [],
  indice: ''
})

export const mutations = {
  increment(state) {
    state.counter++
  },
  SAVE_DATOS(state, datos) {
    state.datos = datos
  },
  DELETE_DATO(state, indice) {
    state.datos.splice(indice, 1)
    console.log(indice)
  },
  UPDATE_DATO(state, indice) {
    state.indice = indice
    console.log(state.indice)
  },
  GUARDA_DATO(state, payload) {
    var id = payload.id
    var titulo = payload.titulo
    if (
      confirm(
        "Estás seguro de editar a '" + state.datos[state.indice].title + "' ?"
      )
    ) {
      state.datos[state.indice].ID = id
      state.datos[state.indice].title = titulo
    }
  },
  NUEVO_DATO(state, payload) {
    var id = payload.id
    var titulo = payload.titulo
    if (
      confirm(
        "Estás seguro de guardar '" + titulo + "' ?"
      )
    ) {
      var dato = {
        'ID' : id,
        'title' : titulo
      }
      state.datos.push(dato)
    }
  },
}

export const actions = {
  loadDatos({ commit }) {
    this.$axios
      .$get(
        'https://www.etnassoft.com/api/v1/get/?category=libros_programacion&criteria=most_viewed'
      )
      .then((result) => {
        commit('SAVE_DATOS', result)
        console.log(result)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  eliminaDatos({ commit }, indice) {
    commit('DELETE_DATO', indice)
  },
  editaDatos({ commit }, indice) {
    commit('UPDATE_DATO', indice)
  },
  guardaDatos({ commit }, payload) {
    commit('GUARDA_DATO', payload)
  },
  nuevoDato({commit}, payload) {
    commit('NUEVO_DATO', payload)
  },
}
```

Y después va el archivo ```pages/index.vue``` que corresponde a la web.

```
<template>
  <div class="container p-5">
    <div class="grid grid-cols-2">
      <!-- Columna Izquierda -->
      <div>
        <form class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >Id</label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            :class="{ 'cursor-not-allowed' : cursor }"
            id="grid-last-name"
            type="text"
            placeholder="id"
            v-model="id"
            :disabled="inputOpen"
          />
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >Título</label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            :class="{ 'cursor-not-allowed' : cursor }"
            id="grid-last-name"
            type="text"
            placeholder="Título"
            v-model="titulo"
            :disabled="inputOpen"
          />
          <div class="mt-4">
            <button
              class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              :class="{ 'cursor-not-allowed' : cursor }"
              @click="guarda"
              :disabled="inputOpen"
            >Guardar</button>
            <button
              class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              :class="{ 'cursor-not-allowed' : cursor }"
              @click="cancela"
              :disabled="inputOpen"
            >Cancelar</button>
          </div>
        </form>
      </div>
      <!-- Columna derecha -->
      <div>
        <p>{{ counter }} no?????</p>
        <button
          @click="increment"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >Incrementar</button>
        <button
          @click="nuevo"
          :class="{ 'cursor-not-allowed' : !cursor }"
          class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >Crear nuevo</button>
        <ul class="grid">
          <li v-for="dato in datos" :key="dato.id" class="inline-flex m-2">
            {{ dato.ID }} - {{ dato.title }}
            <a href="#" class="pl-6" @click="edita(dato)">
              <img src="../assets/icons/edit-pencil.svg" alt="edit" class="tamanoIcono" />
            </a>
            <a href="#" class="pl-6" @click="elimina(dato)">
              <img src="../assets/icons/trash.svg" alt="trash" class="tamanoIcono" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

  import { mapState, mapMutations } from 'vuex'

  export default {
    data() {
      return {
        id: '',
        titulo: '',
        inputOpen: true,
        cursor: true,
        datoNuevo: false
      }
    },
    computed: mapState(['counter', 'datos']),
    methods: {
      ...mapMutations(['increment']),
      elimina(dato) {
        var indice = this.datos.indexOf(dato)
        if (indice != -1) {
          if (confirm("Estás seguro de eliminar a '" + dato.title + "' ?")) {
            this.$store.dispatch('eliminaDatos', indice)
          }
        }
      },
      edita(dato) {
        this.id = dato.ID
        this.titulo = dato.title
        var indice = this.datos.indexOf(dato)
        this.$store.dispatch('editaDatos', indice)
        this.inputOpen = false
        this.cursor = false
        this.datoNuevo = false
      },
      guarda() {
        var payload = {
          id: this.id,
          titulo: this.titulo
        }
        if (this.datoNuevo == false) {
          this.$store.dispatch('guardaDatos', payload)
        } else {
          this.$store.dispatch('nuevoDato', payload)
          this.datoNuevo = false
        }
        this.inputOpen = true
        this.id = ''
        this.titulo = ''
        this.cursor = true
      },
      cancela() {
        this.inputOpen = true
        this.id = ''
        this.titulo = ''
        this.cursor = true
      },
      nuevo() {
        this.cursor = false
        this.inputOpen = false
        this.datoNuevo = true
      }
    },
    created() {
      this.$store.dispatch('loadDatos')
    }
  }

</script>

<style scoped>
.tamanoIcono {
  height: 1.5rem;
  width: 1.5rem;
}
</style>

```

Si hay clases que no conoceis os diré que he usado [Tailwindcss](https://tailwindcss.com/) para el *css*.

Espero que os haya gustado, yo seguro que lo consulto muchas veces.

Salu2
