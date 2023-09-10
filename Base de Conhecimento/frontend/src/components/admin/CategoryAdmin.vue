<template>
  <div class="category-admin">
    <b-form>
      <input type="hidden" v-model="category.id" id="category-id">
        <b-form-group label="Nome: " label-for="category-name">
          <b-form-input id="category-name" v-model="category.name" required 
            placeholder="Informe o nome da categoria" :readonly="mode === 'remove'"></b-form-input>
        </b-form-group>

        <b-form-group label="Categoria Pai: " label-for="category-parentId">
          <b-form-select id="category-parentId"
          :options="categories" v-model="category.parentId"></b-form-select>
        </b-form-group>

        <b-button variant="primary" @click="save" v-if="mode === 'save'">Salvar</b-button>
        <b-button variant="danger" @click="remove" v-if="mode === 'remove'">Excluir</b-button>
        <b-button @click="reset">Cancelar</b-button>
    </b-form>

    <hr>

    <b-table hover striped :items="categories">
      <template slot="actions" slot-scope="data">
        <b-button variant="warning" @click="loadCategory(data.item)" class="mr-2">
          <i class="fa fa-pencil"></i>
        </b-button>
        <b-button variant="danger" @click="loadCategory(data.item, 'remove')">
          <i class="fa fa-trash"></i>
        </b-button>
      </template>
    </b-table>
  </div>
</template>

<script>

import axios from 'axios'
import { baseApiUrl, showError } from '../../global'

export default {
    name: 'CategoryAdmin',
    data: function(){
      return {
        category: {},
        categories: [],
        mode: 'save',
        fields: [
          {key: "id", label: "Código", sortable: true},
          {key: "name", label: "Nome", sortable: true},
          {key: "path", label: "Caminho"},
          {key: 'actions', label: 'Ações'}
        ]
      }
    },
    methods: {
      save(){
        const method = this.category.id ? 'put' : 'post'
        const id = this.category.id ? `/${this.category.id}` : ''

        axios[method](`${baseApiUrl}/categories${id}`, this.category)
          .then(() => {
            this.$toasted.global.defaultSuccess()
            this.reset()
          })
          .catch(e => showError(e))
      },

      reset(){
        this.mode = 'save'
        this.category = {}
        this.loadCategories()
      },

      loadCategory(category, mode = 'save'){
        this.category = { ...category }
        this.mode = mode
      },

      remove(){
        const id = this.category.id
        axios.delete(`${baseApiUrl}/categories/${id}`)
          .then(() => {
            this.$toasted.global.defaultSuccess()
            this.reset()
          })
          .catch(e => showError(e))
      },

      loadCategories(){
        axios.get(`${baseApiUrl}/categories`)
          .then((resp) => {
            this.categories = resp.data.map(category => {
              return { ...category, value: category.id, text: category.path }
            })
          })
      }
    },
    mounted(){
      this.loadCategories()
    }
}
</script>

<style>

</style>