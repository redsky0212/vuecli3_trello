<template>
  <Modal class="modal-card">
    <div slot="header" class="modal-card-header">
      <div class="modal-card-header-title">
        <input class="form-control" type="text" :value="fetchedCard.title" @click="toggleTitle=true" @blur="onBlurTitle" :readonly="!toggleTitle" ref="inputTitle" />
      </div>
      <a class="modal-close-btn" href="" @click.prevent="onClose">&times;</a>
    </div>
    <div slot="body">
      <h3>Description</h3>
      <textarea  class="form-control" cols="30" rows="3" placeholder="Add a more detailed description..."
        readonly
        v-model="fetchedCard.description"></textarea>
    </div>
    <div slot="footer"></div>
  </Modal>
</template>

<script>
import Modal from './Modal.vue';
import {mapActions, mapState, mapGetters} from 'vuex'

export default {
    components: {
        Modal
    },
    data(){
        return {
            toggleTitle : false
        }
    },
    computed:{
        ...mapGetters([
            'fetchedCard',
            'fetchedBoardItem'
        ])
    },
    created(){
        this.fetchCard();
    },
    methods:{
        ...mapActions([
            'GET_CARD',
            'UPDATE_CARD'
        ]),
        onClose() {
            this.$router.push(`/b/${this.fetchedBoardItem.id}`)
        },
        fetchCard(){
            const id = this.$route.params.cid;
            this.GET_CARD(id);
        },
        onBlurTitle(){
            this.toggleTitle = false;
            const title = this.$refs.inputTitle.value.trim();
            if( !title ){
                return;
            }
            this.UPDATE_CARD(this.fetchedCard.id, title)
                .then(() => {
                    this.fetchCard();
                });
        }
    }
}
</script>

<style>
.modal-card .modal-container {
  min-width: 300px;
  max-width: 800px;
  width: 60%;
}
.modal-card-header-title {
  padding-right: 30px;  
}
.modal-close-btn {
  position: absolute;
  top: 0px;
  right: 0px;
  font-size: 24px;
  text-decoration: none;
}
.modal-card-header {
  position: relative;
}
</style>
