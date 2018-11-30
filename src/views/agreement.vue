<template>
    <div class="agreement">
        <ComAgreement></ComAgreement>
        <!--<router-link :to="{ path: '/ApplySubmit'}" ><MyButton :ButtonNext="ButtonNext" :disabled="disabled"></MyButton></router-link>-->
        <!--<div class="btnBox">-->
            <!--<router-link :to="{ path: '/ApplySubmit'}" style="flex: 1" ><MyButton :ButtonNext="ButtonNext" ></MyButton></router-link>-->
            <!--<router-link :to="{ path: '/ApplySubmit'}" style="flex: 1" ><MyButton :ButtonNext="ButtonNext" ></MyButton></router-link>-->
        <!--</div>-->
        <div class="btn-bottom-fixed bg-w box" >
            <div class="f1 t-ad bg-w b-t b-e0" >不同意</div>
            <div class="f1 bg-2d" @click="subMit">同意</div>
        </div>

    </div>
</template>

<script>
    import MyButton from '@/components/MyButton.vue'
    import ComAgreement from '../components/com-agreement-msg'
    export default {
        name: "agreement",
        components:{
            MyButton,
            ComAgreement
        },
        data(){
            return{
                ButtonNext:'下一步',
            }
        },
        methods: {
            subMit: function () {
                this.$router.push({
                    path: `/ApplySubmit`,
                })
            },
        }
    }
</script>

<style scoped>
    .agreement{
        background: #fff;
        padding: 0 1.25rem;
    }
    .btn-bottom-fixed {
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        height: 2.75rem;
        line-height: 2.75rem;
        color: #fff;
        background-color: #2dbcfe;
        text-align: center;
        font-size: 1.125rem

    }
    .f1 {
        -moz-box-flex: 1;
        -webkit-flex: 1;
        flex: 1
    }
    .t-ad {
        color: #adb8bf
    }
    .bg-w {
        background-color: #fff
    }
    .b-t {
        border-top: 1px solid #000
    }
    .b-e0 {
        border-color: #e0e3ea
    }
    .bg-2d {
        background-color: #2dbcfe
    }



</style>