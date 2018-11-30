<template>
    <div>
    <Header></Header>
        <div class="sendPicture">* 请拍摄或上传辅助证明材料请确保图片清晰,四角完整。做多上传五张</div>
        <div class="photo" ><img src="../assets/auxiliary/15uf.jpg" @click="SendPicture"></div>
        <router-link :to="{ path: '/companyAddress'}">
            <MyButton :ButtonNext="ButtonNext"></MyButton>
        </router-link>
    </div>
</template>

<script>
    import Header from '@/components/Header.vue'
    import MyButton from '@/components/MyButton.vue'
    export default {
        name: "auxiliary",
        components:{
            Header,
            MyButton
        },
        data(){
            return{
                ButtonNext:'保存返回'
            }
        },
        methods:{
            SendPicture:function(){
                alert("请上传图片")
            }
        }
    }
</script>

<style scoped>
.sendPicture{
    text-align: center;
    /*margin-top: 20px;*/
    padding: 20px;
    background: white;
    color:#2dbbfd
}
    .photo{
        background: white;
        padding-top: 30px;
    }
</style>