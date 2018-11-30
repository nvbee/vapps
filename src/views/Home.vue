<template>
        <div class="home">
            <div class="qrCode box">
                <div class="f1">
                    {{qrcode}}
                </div>
                <div class="bind-btn box v-center" id="scan">
                    <div class="icon-scan v-center mar-r05"></div>
                    <div>绑定已有二维码</div>
                </div>
            </div>
            <!--三个选择列表-->
                <ShowList :entryData="entryData" @showList="showList"></ShowList>
            <!--填写列表-->
            <ShowListInput :needData="needData" :placeholder="placeholder"  @inputChange="inputChange" :inputValue="inputValue"></ShowListInput>
            <tips  v-for="(tips,index) of tipsData" :key="index" :tips="tips"></tips>
            <!--下一步-->
            <router-link :to="{ path: '/LegalPersonPhoto'}" ><MyButton :ButtonNext="ButtonNext" :disabled="disabled"></MyButton></router-link>
            <!--下面机构选择等弹出框-->
            <Popup :popupVisible="popupVisible"  @change='change'>
                <picker @cancel="cancel"  :ChooseName="ChooseName" :slotData="slotData" @companyName="companyName"></picker>
            </Popup>
            <!--<div @click="sendData">测试</div>-->
        </div>
</template>

<script>
    // @ is an alias to /src
    import MyButton from '@/components/MyButton.vue'
    import ShowList from '@/components/ShowList.vue'
    import tips from '@/components/tips.vue'
    import ShowListInput from '@/components/ShowListInput.vue'
    import Popup from '@/components/Popup.vue'
    import picker from '@/components/picker.vue'
    import { mapState,mapMutations } from 'vuex'
    // import {AXIOS_POST} from '@/lib/axios'


    export default {
        name: 'home',
        components: {
            MyButton,
            ShowList,
            tips,
            ShowListInput,
            Popup,
            picker
        },
        data() {
            return {
                disabled:true,
                ButtonNext: '下一步',
                qrcode: '已有二维码请绑定',
                needData:'推荐人',
                placeholder:"请输入推荐人ID(选填)",
            }
        },
        computed: {
            ...mapState('home',['OppName','popupVisible','ChooseName',
                        'entryData','tipsData','slotData','inputValue'])
        },
        mounted () {
            console.log('InputValue', this.InputValue)
        },
        methods:{
            ...mapMutations('home',['getSelectValue','showSelectList', 'selectCancle','getInputValue','selectChange']),
            showList: function (value) {
                this.showSelectList(value)
            },
            cancel() {
                this.selectCancle()
            },
            change(){
                this.selectChange()
            },
            companyName:function(value){
                if(this.OppName=="mechanism"){
                    this.entryData[0].choose=value.join("-")
                    this.disabled=false;
                }else if(this.OppName=="department"){
                    this.entryData[1].choose=value.join("-")
                }else if(this.OppName=="recommend"){
                    this.entryData[2].choose=value.join("-")
                }
            },
            inputChange(value){
                this.getInputValue(value)
            },
            sendData(){
                console.log(this.entryData[0].choose)
                console.log(this.entryData[1].choose)
                console.log(this.entryData[2].choose)
                console.log(this.inputValue)
            }

        }
    }

</script>
<style scoped>
    .qrCode {
        height: 3.75rem;
        line-height: 3.75rem;
        background-color: #fff;
        color: #80898d;
        font-size: .9375rem;
        padding-left: .9375rem;
        padding-right: .9375rem;
        text-align: left;
        margin-bottom: .5rem;
    }
    .bind-btn {
        height: 2rem;
        line-height: 2rem;
        color: #2dbbfd;
        font-size: .875rem;
        border-radius: .3125rem;
        border: 1px solid #2dbbfd;
        padding-left: .875rem;
        padding-right: .875rem;
    }
    .v-center {
        margin: auto 0
    }
    .icon-scan {
        background-image: url(../assets/images/icon-scan.png);
        height: .875rem;
        width: .875rem;
        background-size: 100% 100%
    }
    .mar-r05 {
        margin-right: .5rem
    }
    .f1 {
        -moz-box-flex: 1;
        -webkit-flex: 1;
        flex: 1
    }
    .box {
        display: -webkit-flex;
        display: flex;
        flex-flow: row
    }
</style>
