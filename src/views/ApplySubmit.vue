<template>
    <div class="applysubmit">
        <div class="tx-c pad-lr2 pad-t25">
            <img src="../assets/images/loading.gif" class="w-3">
            <p>{{hint}}</p>
        </div>
        <ComIconList >
        </ComIconList>
        <mt-button @click="subMit" :disabled="Flag" type="primary" size="large" class='btn-fix' :style='btnNext'>
            {{ButtonNext}}
        </mt-button>



        <!--<router-link :to="{ path: '/Result'}" ><MyButton :ButtonNext="ButtonNext" :disabled="disabled"></MyButton></router-link>-->
    </div>
</template>

<script>
    import MyButton from '@/components/MyButton.vue'
    import ComIconList from '../components/com-icon-list'
    import {Header} from 'mint-ui';
    import {Button} from 'mint-ui';
    export default {
        name: "ApplySubmit",
        components:{
            MyButton,
            Button,
            ComIconList
        },
        data(){
            return{
                Flag:false,
                // longTitle:'申请提交中',
                hint:'请稍等,您的资料正在提交中,亦可浏览以下我司其他产品',
                btnNext: {position: "absolute", bottom: 0, left: 0},
                ButtonNext:'完成'
            }
        },
        methods:{
            subMit() {
                this.$router.push({
                    path: `/result`,
                })
            }
        }
    }
</script>

<style scoped>
    .applysubmit{
        background: white;
    }
    .tx-c {
        text-align: center
    }
    .pad-lr2 {
        padding-left: 2rem;
        padding-right: 2rem
    }
    .mar-t25 {
        margin-top: 2.5rem
    }
    .mar-t25 {
        margin-top: 2.5rem
    }
    .w-3 {
        width: 3rem
    }
    .pad-t25{
        padding-top: 1.25rem;
    }
</style>