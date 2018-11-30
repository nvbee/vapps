<template>
    <mt-header title="辅助材料证明" class="header">
        <router-link to="/companyAddress" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>

        <mt-button slot="right">保存</mt-button>

    </mt-header>
</template>

<script>
    import { Header } from 'mint-ui';
    export default {
        name: "Header",
        components:{
            Header
        }
    }
</script>

<style scoped>
.header{
    height: 50px;
   font-size: 1rem;
}
</style>