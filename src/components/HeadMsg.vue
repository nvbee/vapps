<!--头部-->
<template>
    <div class="header">
        <div class="head-left">
            <div class="icon-left"></div>
        </div>
        <div class="head-center">
            {{headMsg}}
        </div>
        <div class="head-right"></div>
    </div>
</template>

<script>
    export default {
        name: 'HeadMsg',
        props: {
            headMsg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .header {
        height: 2.75rem;
        line-height: 2.75rem;
        font-size: 1.125rem;
        position: fixed;
        background-color: #2dbcfe;
        color: #fff;
        text-align: center;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        z-index: 1002;
        display: -webkit-flex;
        display: flex;
        flex-flow: row
    }

    .head-left {
        padding-left: .9375rem;
        padding-top: .6875rem;
        padding-bottom: .6875rem;
        width: 4rem

    }
    .icon-left {
        background-image: url(../assets/icon-left.png);
        height: 1.375rem;
        width: 1.375rem;
        background-size: 100% 100%
    }

    .head-center {
        -moz-box-flex: 1;
        -webkit-flex: 1;
        flex: 1
    }

    .head-right {
        width: 4rem;
        padding-right: .9375rem
    }


</style>
