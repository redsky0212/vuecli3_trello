<template>
    <div>
        Board
        <div v-if="loading">Loading board ...</div>
        <div v-else>
            <div>{{bid}}</div>
            <router-link v-bind:to="`/b/${bid}/c/1`">Card 1</router-link>
            <router-link v-bind:to="`/b/${bid}/c/2`">Card 2</router-link>
            <hr />
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
    data(){
        return {
            bid: 0,
            cid:0,
            loading:false
        }
    },
    created(){
        this.fetchData();
        this.bid = this.$route.params.bid;
    },
    methods:{
        fetchData(){
            this.loading = true;
            setTimeout(() => {
                this.loading = false;
            },500);
        }
    }
}
</script>

<style>

</style>
