<template>
    <div class="desc-content-box">
        <div class="desc-content">
            <div class="box">
                <div class="dot"></div>
                <div class="tips">{{tips}}</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{

            }
        },
        props:{
            tips:String
        },
        mounted() {
            console.log(this.tips)
        },
    }
</script>
<style lang="less">
    .desc-content {
        font-size: .75rem;
        color: #a7b0b5
    }
    .dot {
        width: .3125rem;
        height: .3125rem;
        border-radius: .3125rem;
        position: relative;
        background-color: #2dbbfd;
        top: .45rem;
        left: .15rem;
        margin-right: 3px;

    }
    .desc-content-box{
        padding-left: .9375rem;
        padding-right: .9375rem;
        margin-top: .625rem;
    }
    .box {
        display: -webkit-flex;
        display: flex;
        flex-flow: row
    }
    .tips{
        text-align: left;
        margin-left: 6px;

    }



</style>
