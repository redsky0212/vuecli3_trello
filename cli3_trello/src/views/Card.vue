<template>
    <div>
        Card
        
        <div v-if="loading">Loading board ...</div>
        <div v-else>
            <div>{{cid}}</div>
        </div>
    </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
    data(){
        return {
            cid:0,
            loading:false
        }
    },
    //created(){
    //    this.fetchData();
   // },
    watch:{
        '$route' : {
            handler: 'fetchData',
            immediate:true
        }
    },
    methods:{
        fetchData(){
            this.loading = true;
            setTimeout(() => {
                this.cid = this.$route.params.cid;
                this.loading = false;
            },500);
        }
    }
}
</script>

<style>

</style>
