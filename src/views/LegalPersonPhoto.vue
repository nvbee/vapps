<template>
    <div class="LegalPersonPhoto">
        <mt-header :title="longTitle">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <process :color="color"></process>
        <div class="LegalPersonTip">
            <div class="LegalPerson">法人身份证原件照片</div>
            <div class="pictureTips">*请拍摄或上传法人身份证原件照片请确保图片清晰，四角完整</div>
            <PeoplePicture :PeoplePicture="PeoplePictures" @photo="photo"></PeoplePicture>
        </div>
        <router-link :to="{ path: '/Authentication'}">
            <MyButton :ButtonNext="ButtonNext"></MyButton>
        </router-link>
    </div>
</template>

<script>
    import MyButton from '@/components/MyButton.vue'
    import process from '@/components/process.vue'
    import ShowListInput from '@/components/ShowListInput.vue'
    import Popup from '@/components/Popup.vue'
    import picker from '@/components/picker.vue'
    import ShowList from '@/components/ShowList.vue'
    import PeoplePicture from '@/components/PeoplePicture.vue'
    import {mapState} from 'vuex'
    import {Header} from 'mint-ui'
    import wx from 'weixin-js-sdk'
    // import ComWxconfig from '../components/com-wx-config'
    // import { getWxJssdk, queryOrOpenParking } from '@/api'


    export default {
        name: "LegalPersonPhoto",
        components: {
            MyButton,
            process,
            ShowListInput,
            Popup,
            picker,
            ShowList,
            PeoplePicture,
        },
        data() {
            return {
                ButtonNext: '下一步',
                needData: '手机号',
                color: {color: '#2dbbfd'},
                longTitle:'法人信息验证'
            }
        },
        computed: {
            ...mapState('LegalPersonPhoto', ['PeoplePictures'])
        },
        methods: {
            photo(value) {
                if (value == 'firstPhoto') {
                    this.uploadImageChange()
                } else if (value == 'secondPhoto') {
                    this.uploadImageChange()
                } else if (value == 'thirdPhoto') {
                    this.uploadImageChange()
                }
            },
            uploadImageChange() {
                wx.config({
                    debug: true,
                    appId: 'wxcd71401424504247',
                    timestamp: Date.parse(new Date()),
                    nonceStr: 'b42a4f93-f396-11e8-9c8f-0235d2b38928',
                    signature: "16__O_qq2l3JDNfxycqjtXQY-cScU6mLj4wE16vTsW6RK9YbmteeNUUZ6QtW1cWlzqRWtnMu2sMesmiPzjrivFxr6OxJ29ll7KFewSv1jIgOodQlDHWcoPh_WTHFWoy-NrR7prsaEyA7NMonnwcSHVaABAMBP",
                    jsApiList: ["scanQRCode", "chooseImage", "getLocation", "openLocation", "onMenuShareAppMessage", "onMenuShareQQ", "previewImage"]
                });
                wx.ready(function () {
                   alert('sucess')
                })
                wx.error(function (res) {
                    console.log("error")
                    // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
                });
            }

        }
    }
</script>

<style scoped>
    .LegalPersonTip {
        padding-left: .93rem;
        padding-right: .93rem;
        background: white;
        padding-bottom: 1.93rem;
        font-size:  .875rem;
    }
    .LegalPerson {
        text-align: left;
        padding-bottom:  .875rem;
        padding-top:  .875rem;
        border-bottom: 1px solid #e0e3ea;
    }
    .pictureTips {
        padding-bottom:  .875rem;
        padding-top:  .875rem;
        color: #80898d;
    }
    input::-webkit-input-placeholder {
        color: #e0e3ea;
    }
</style>