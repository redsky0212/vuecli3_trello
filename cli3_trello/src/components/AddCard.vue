<template>
  <div class="add-card" @click.stop="onAddCardCon">
    <form @submit.prevent="onSubmit">
      <input class="form-control" type="text" ref="inputText" v-model="inputTitle">
      <button class="btn btn-success" type="submit" :disabled="invalidInput">Add Card</button>
      <a class="cancel-add-btn" href="" @click.prevent="$emit('close')">&times;</a>
    </form>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  props: ['listId'],
  data() {
    return {
      inputTitle: ''
    }
  },
  computed: {
    invalidInput(){
      return !this.inputTitle.trim();
    }
  },
  mounted(){
   this.$refs.inputText.focus();
   // add card 외부를 클릭했을때 닫히게 하기. 
   this.setupClickOutside();
  },
  methods:{
    onSubmit(){
      if(this.invalidInput){ return; } 
      this.ADD_CARD({
        title: this.inputTitle,
        listId: this.listId
      })
      .finally(d => { this.inputTitle=''; });
    },
    setupClickOutside(){
        document.getElementsByTagName('body')[0].addEventListener('click', e => {
            this.$emit('close')
        });          
    },
    onAddCardCon(){
      // add card container 를 클릭했을때는 닫히지 않게하기 위함.
    },
    ...mapActions([
      'ADD_CARD'
    ])
  }
}
</script>

<style>
.add-card {
  padding: 10px;
  display: block;
  position: relative;
}
.add-card .cancel-add-btn {
  display: inline-block;
  margin-left: 10px;
  vertical-align: middle;
  text-decoration: none;
  color: #888;
  font-size: 24px;
}
.add-card .cancel-add-btn:hover,
.add-card .cancel-add-btn:focus {
  color: #666;
}
</style>
