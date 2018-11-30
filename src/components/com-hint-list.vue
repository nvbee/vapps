<template>
    <div>
        <div class="mar-t0375 box relative stepDiv">
            <div class="stepLine b-undo"></div>
            <div class="stepDot dot-undo mar-r093" :class="{iconProcess:progress}"></div>
            <div>
                <div class="progress-title" :class="{fcBl:progressBar}">{{list[0]}}</div>
                <div class="fz75 mar-t0625">{{HintList[0]}}</div>
            </div>
        </div>
        <div class="mar-t0375 box relative stepDiv">
            <div class="stepLine b-undo"></div>
            <div class="stepDot dot-undo mar-r093" :class="{iconProcess1:progress1}"></div>
            <div>
                <div class="progress-title" :class="{fcBl1:progressBar1}">{{list[1]}}</div>
                <div class="fz75 mar-t0625">{{HintList[1]}}</div>
            </div>
        </div>
        <div class="mar-t0375 box relative stepDiv">
            <!--<div class="stepLine b-undo"></div>-->
            <div class="stepDot dot-undo mar-r093" :class="{iconProcess2:progress2}"></div>
            <div>
                <div class="progress-title" :class="{fcBl2:progressBar2}">{{list[2]}}</div>
                <div class="fz75 mar-t0625">{{HintList[2]}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "com-hint-list",
        props:['progress','progressBar', 'progress1','progressBar1', 'progress2','progressBar2'],
        data() {
            return {
                iconProcess: require('../assets/images/icon-process.png'),
                wRem:'.8125rem',
                hRem:'.8125rem',
                HintList: ['申请结果提交成功以后，会进入审核流程', '在一个工作日内会出现审核结果',
                    '审核通过后，第二个工作日请移步收银对账下对账查询模块'],
                list: ['申请提交成功', '审核中', '审核结果'],
            }
        },
    }
</script>

<style scoped>
    .mar-t0375 {
        margin-top: .375rem
    }
    .relative {
        position: relative
    }
    .stepDiv {
        height: 5.5rem
    }
    .b-undo {
        border-left: 1px dashed #cdd5d9
    }
    .mar-r093 {
        margin-right: .9375rem
    }
    .fz75 {
        font-size: .75rem
    }
    .mar-t0625 {
        margin-top: .625rem
    }
    .stepLine {
        position: absolute;
        left: 0;
        top: 1.8rem;
        height: 4.8rem
    }
    .dot-undo {
        background-color: #cdd5d9
    }

    .stepDot {
        width: .4375rem;
        height: .4375rem;
        border-radius: .4375rem;
        position: relative;
        right: .2175rem;
        top: 1.25rem;
        background-size: 100% 100%;
        background-color: #cdd5d9
    }
    .progress-title {
        padding-top: 0;
        font-size: 1rem
    }
    .fcBl,.fcBl1,.fcBl2{
        color: #2dbbfd;
    }
    .iconProcess,.iconProcess1,.iconProcess2 {
        background-image: url(../assets/images/icon-process.png);
        width: .8125rem;
        height: .8125rem;
        background-size: 100% 100%;
        position: relative;
        right: .4rem;
        top: 1.1rem;
        margin-right: .5625rem
    }
</style>