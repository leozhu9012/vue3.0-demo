<template>
  <div class="hello">
    <h1>{{ msg }}{{text}}-{{page}}-{{limit}}</h1>
    <input type="text" v-focus>
    <button @click="search">search</button>
    <Count :number="count" @submit="countChange"></Count>
  </div>
</template>

<script lang="ts">
import { ref,defineComponent,computed,getCurrentInstance } from 'vue';
import { useStore } from 'vuex';
import { useRouter,useRoute } from 'vue-router';
import Count from './count/index.vue';
import { NewPage, page, limit } from '../libs/pages';
export default defineComponent({
  name: 'HelloWorld',
  components: {
    Count
  },
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  /**
   * 自定义指令
   */
  directives: {
      focus: {
        // 指令的定义
        mounted(el) {
          console.log(el)
          el.focus()
        }
      }
  },
  setup() {
    const ctx = getCurrentInstance();
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    console.log(ctx, router, route);
    const text = ref('123');
    const count = computed((): void => {
      return store.state.count;
    })
    const add = (e: number): void => {
      store.commit('setCount', e);
    }
    const countChange = (e: number): void => {
      console.log('count change', e, count);
      add(e);
      pages.currentPageChange(e);
      console.log(store, page);
    }
    const getData = (): void => {
      console.log('getData');
    }
    const pages = new NewPage(1, 10, getData);
    console.log(pages);
    return {
      text,
      count,
      add,
      countChange,
      page, limit,
      ...pages 
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
