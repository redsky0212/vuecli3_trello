<template>
  <div>
    <div class="home-title">Personal Boards</div>
    <div class="board-list" ref="boardList">
      <div class="board-item" v-for="b in fetchedBoards.list" :key="b.id" :style="`background-color:${b.bgColor}`" ref="boardItem" :data-bgcolor="b.bgColor">
        <router-link :to="`/b/${b.id}`">
          <div class="board-item-title">{{b.title}}</div>
        </router-link>
      </div>
      <div class="board-item board-item-new">
        <a class="new-board-btn" href="" @click.prevent="SET_ISADDBOARD(true)">
          Create new board...
        </a>
      </div>
    </div>
    <AddBoard v-if="getIsAddBoard" />
  </div>
</template>
<script>
import {mapGetters, mapActions, mapMutations} from 'vuex';
import AddBoard from './AddBoard.vue';

export default {
    data() {
        return {
            loading: false,
            error: ''
        }
    },
    components: {
        AddBoard
    },
    computed: {
       ...mapGetters(['fetchedBoards', 'getIsAddBoard'])
    },
    created(){
        this.loading = true;
        this.FETCH_BOARD().finally(_=>{ this.loading = false; });
        this.SET_THEME();
    },
    updated() {
        this.$refs.boardItem.forEach(el => {
            el.style.backgroundColor = el.dataset.bgcolor
        })
    },
    methods: {
        ...mapActions([
            'FETCH_BOARD'
        ]),
        ...mapMutations([
            'SET_ISADDBOARD',
            'SET_THEME'
        ])
    }
}
</script>


<style>
.home-title {
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
}
.board-list {
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
}
.board-item {
  width: 23%;
  height: 100px;
  margin: 0 2% 20px 0;
  border-radius: 3px;
}
.board-item-new {
  background-color: #ddd;
}
.board-item a {
  text-decoration: none;
  display: block;
  width: 100%;
  height: 100%;
}
.board-item a:hover,
.board-item a:focus {
  background-color: rgba(0,0,0, .1);
  color: #666;
}
.board-item-title {
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  padding: 10px;
}
.board-item a.new-board-btn {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  height: 100px;
  width: inherit;
  color: #888;
  font-weight: 700;
}
</style>






