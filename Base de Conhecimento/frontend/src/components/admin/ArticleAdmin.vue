<template>
  <div class="article-admin">
    <b-form>
      <input type="hidden" v-model="article.id" id="article-id">
        <b-form-group label="Nome: " label-for="article-name">
          <b-form-input id="article-name" v-model="article.name" required 
            placeholder="Informe o nome do artigo" :readonly="mode === 'remove'"></b-form-input>
        </b-form-group>

        <b-form-group label="Descrição: " label-for="article-description">
          <b-form-input id="article-description" v-model="article.description" required 
            placeholder="Informe a descrição do artigo" :readonly="mode === 'remove'"></b-form-input>
        </b-form-group>

        <b-form-group v-if="mode === 'save'" label="Imagem (URL): " label-for="article-imageUrl">
          <b-form-input id="article-imageUrl" v-model="article.imageUrl" required 
            placeholder="Informe a URL da imagem do artigo" :readonly="mode === 'remove'"></b-form-input>
        </b-form-group>

        <b-form-group v-if="mode === 'save'" label="Categoria: " label-for="article-categoryId">
          <b-form-select id="article-categoryId"
          :options="categories" v-model="article.categoryId"></b-form-select>
        </b-form-group>

        <b-form-group v-if="mode === 'save'" label="Autor: " label-for="article-userId">
          <b-form-select id="article-userId"
          :options="users" v-model="article.userId"></b-form-select>
        </b-form-group>

        <b-form-group v-if="mode === 'save'" label="Conteúdo" label-for="article-content">
          <VueEditor v-model="article.content"
            placeholder="Informe o conteúdo do artigo" />
        </b-form-group>

        <b-button variant="primary" @click="save" v-if="mode === 'save'">Salvar</b-button>
        <b-button variant="danger" @click="remove" v-if="mode === 'remove'">Excluir</b-button>
        <b-button @click="reset">Cancelar</b-button>
    </b-form>

    <hr>

    <b-table hover striped :items="articles">
      <template slot="actions" slot-scope="data">
        <b-button variant="warning" @click="loadArticle(data.item)" class="mr-2">
          <i class="fa fa-pencil"></i>
        </b-button>
        <b-button variant="danger" @click="loadArticle(data.item, 'remove')">
          <i class="fa fa-trash"></i>
        </b-button>
      </template>
    </b-table>

    <b-pagination size="md" v-model="page"
      :total-rows="count" :per-page="limit"></b-pagination>
  </div>
</template>

<script>

import { VueEditor } from 'vue2-editor'
import axios from 'axios'
import { baseApiUrl, showError } from '../../global'

export default {
    name: 'ArticleAdmin',
    data: function(){
      return {
        article: {},
        articles: [],
        categories: [],
        users: [],
        page: 1,
        limit: 0,
        count: 0,
        mode: 'save',
        fields: [
          {key: "id", label: "Código", sortable: true},
          {key: "name", label: "Nome", sortable: true},
          {key: "description", label: "Descrição", sortable: true},
          {key: 'actions', label: 'Ações'}
        ]
      }
    },
    methods: {
      save(){
        const method = this.article.id ? 'put' : 'post'
        const id = this.article.id ? `/${this.article.id}` : ''

        axios[method](`${baseApiUrl}/articles${id}`, this.article)
          .then(() => {
            this.$toasted.global.defaultSuccess()
            this.reset()
          })
          .catch(e => showError(e))
      },

      reset(){
        this.mode = 'save'
        this.article = {}
        this.loadArticles()
      },

      loadArticle(article, mode = 'save'){
        this.mode = mode
        axios.get(`${baseApiUrl}/articles/${article.id}`)
          .then((resp) => this.article = resp.data)
      },

      remove(){
        const id = this.article.id
        axios.delete(`${baseApiUrl}/articles/${id}`)
          .then(() => {
            this.$toasted.global.defaultSuccess()
            this.reset()
          })
          .catch(e => showError(e))
      },

      loadArticles(){
        axios.get(`${baseApiUrl}/articles?page=${this.page}`)
          .then((resp) => {
            this.articles = resp.data.data
            this.count = resp.data.count
            this.limit = resp.data.limit
        })
      },
      
      loadCategories(){
        const url = `${baseApiUrl}/categories`
        axios.get(url)
          .then(resp => {
            this.categories = resp.data.map(category => {
              return { value: category.id, text: category.path }
            })
          })
      },

      loadUsers(){
        const url = `${baseApiUrl}/users`
        axios.get(url)
          .then(resp => {
            this.users = resp.data.map(user => {
              return { value: user.id, text: `${user.name} - ${user.email}`}
            })
          })
      }
    },
    
    watch: {
      page(){
        this.loadArticles()
      }
    },

    mounted(){
      this.loadUsers()
      this.loadArticles()
      this.loadCategories()
    }
}
</script>

<style>

</style>

