<!--page9-->
<template>
    <div class="result">
        <div class="tx-c pad-lr2 bg-w pad-bt225">
            <img src="../assets/images/res-success.png" class="w-6">
            <p class="status-text1">{{hint}}</p>
        </div>

        <div class="result-process mar-t0625 txcen">
            <ComHintList :progress="progressFlag" :progressBar="progressBarFlag"></ComHintList>
        </div>
        <mt-button @click="subMit" :disabled="Flag" type="primary" size="large" class='btn-fix' :style='btnNext'>
            {{ButtonNext}}
        </mt-button>

    </div>
</template>

<script>
    import ComHintList from '../components/com-hint-list'
    import {Button} from 'mint-ui';
    export default {
        name: "result",
        components: {
            Button,
            ComHintList
        },
        data() {
            return {
                Flag:false,
                hint: '商户二维码业务已提交,请等待审核',
                longTitle: '申请结果',
                // list: ['申请提交成功', '审核中', '审核结果'],
                // HintList: ['申请结果提交成功以后，会进入审核流程', '在一个工作日内会出现审核结果',
                //     '审核通过后，第二个工作日请移步收银对账下对账查询模块'],
                ButtonNext:'完成',
                progressFlag:true,
                progressBarFlag:true,
                btnNext: {position: "absolute", bottom: 0, left: 0}
            }
        },
        methods: {
            subMit() {
                this.$router.push({
                    path: `/`,
                })
            },
        }
    }
</script>
<style>
    .result{
        /*background: #80898d;*/
    }
    .result-process {
        font-size: .9375rem;
        color: #80898d;
        background-color: #fff;
        padding: 1.875rem 2rem 1.875rem 2rem
    }
    .pad-bt225 {
        padding-top: 2.25rem;
        /*padding-bottom: 2.25rem*/
    }
    .status-text1 {
        line-height: 1.125rem;
        margin-top: .5625rem;
        color: #445366;
        font-size: 1.125rem;
    }
    .txcen{
        text-align: left;
    }
    .bg-w {
        background-color: #fff
    }
    .w-6 {
        width: 6rem
    }


</style>