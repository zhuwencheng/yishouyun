<template>
    <div id="main" class="app-main">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                
            };
        },
        mounted () {
        },
        beforeDestroy () {

        },
        methods: {

        }
    };
</script>

<style>
html,body{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.app-main{
    width: 100%;
    height: 100%;
}
.ivu-spin-fix{
    background-color: hsla(0,0%,100%,.1);
}
</style>
