<template>
    <div class="process">
        <div class="pad-lr093-box">
        <div class="identity" :style="color">身份验证</div>
        <div class="show-list-right"></div>
        <div class="identity" :style="tocolor"> 店铺信息</div>
        <div class="show-list-right"></div>
        <div class="identity" :style="gotocolor">商户账户信息</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "process",
        props:{
            color:{
                type:Object
            },
            tocolor:{
                type:Object
            },
            gotocolor:{
                type:Object
            }
        }
    }
</script>

<style scoped>
    .process {
        height: 2.75rem;
        line-height: 2.75rem;
        width: 100%;
        font-size: .9375rem;
        color: #a6b0b5;
        background-color: #fff;
        box-sizing: border-box;
        border-bottom: 1px solid #000;
        border-color: #e0e3ea;
        margin-bottom: .625rem;
    }
    .pad-lr093-box{
        padding-left: .9375rem;
        padding-right: .9375rem;
        display: -webkit-flex;
        display: flex;
        flex-flow: row
    }

    .show-list-right {
        background-image: url(../assets/icon-right.png);
        width: 1.375rem;
        height: 1.375rem;
        background-size: 100% 100%;
        margin: auto 0

    }
    .identity{
        -moz-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        text-align: center;
        margin: auto 0

    }

</style>