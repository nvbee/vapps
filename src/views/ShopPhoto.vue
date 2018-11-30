<template>
    <div>
        <mt-header :title="longTitle">
            <router-link to="/Authentication" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <process :tocolor="tocolor"></process>
        <div class="PeoplePicture">
            <div class="PeoplePictureDiv">商户场所信息</div>
            <PeoplePicture :PeoplePicture="PeoplePicture" @photo="photoNext"></PeoplePicture>
            <div class="mar-2r">
                <ShowListInput :needData="needData" :placeholder="placeholder"></ShowListInput>
            </div>
        </div>
        <router-link :to="{ path: '/companyAddress'}">
            <MyButton :ButtonNext="ButtonNext"></MyButton>
        </router-link>
    </div>
</template>

<script>
    import MyButton from '@/components/MyButton.vue'
    import process from '@/components/process.vue'
    import PeoplePicture from '@/components/PeoplePicture.vue'
    import ShowListInput from '@/components/ShowListInput.vue'
    import {Header} from 'mint-ui';
    export default {
        name: "ShopPhoto",
        components: {
            MyButton,
            process,
            PeoplePicture,
            ShowListInput,
            Header
        },
        data() {
            return {
                ButtonNext: '下一步',
                tocolor:{color: '#2dbbfd'},
                PeoplePicture: [
                    {name: 'first', img: require('../assets/ShopPhoto/u117.png')},
                    {name: 'second', img: require('../assets/ShopPhoto/u118.png')},
                ],
                needData: '商户门面名称',
                placeholder: '请填入和门头照片一致的名字',
                longTitle:'店铺信息验证'
            }
        },
        methods:{
            photoNext(value){
                if(value=='first'){
                    alert("第一张")
                }else if(value=='second'){
                    alert("第二张")
                }
            }
        }
    }
</script>

<style scoped>
    .PeoplePictureDiv {
        text-align: left;
        padding-bottom: 10px;
        padding-top: 10px;
        font-size: 0.9rem;
        border-bottom: 1px solid #e0e3ea;
        margin-bottom: 20px
    }

    .PeoplePicture {
        /*padding: .875rem;*/
        padding-left: .875rem;
        padding-right: .875rem;
        background: white;
    }
    .mar-2r{
        margin-top: 2rem;
        border-top:  1px solid #e0e3ea;
    }
</style>