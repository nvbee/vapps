<template>
    <div>
        <mt-header :title="longTitle">
            <router-link to="/LegalPersonPhoto" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <process :color="color"></process>
        <ShowListInput :needData="LegalPersonName" :placeholder="LegalPersonNamePlaceholder" @inputChange="LegalPersonNameInputValue" :inputValue="LegalPersonNameData"></ShowListInput>
        <ShowListInput :needData="IDNumber" :placeholder="IDNumberPlaceholder" @inputChange="IDNumberInputValue" :inputValue="IDNumberData"></ShowListInput>
        <ShowList :entryData="expirationDate" @showList="showList"></ShowList>
        <ShowListInput :needData="PhoneNumber" :placeholder="phoneNumber" class="marT-10" @inputChange="PhoneNumberInputValue" :inputValue="phoneNumberData"></ShowListInput>
        <div class="showlist">
            <ShowListInput :needData="VerificationCode" :placeholder=Verification @inputChange="CodeDataChange" :inputValue="codaData"></ShowListInput>
            <div class="getCode" @click="countDown" :class="{disabled: !canClick}">{{getCode}}</div>
        </div>
        <ShowList :entryData="occupation" @showList="showList" @inputChange="inputChange"></ShowList>
        <router-link :to="{ path: '/ShopPhoto'}">
            <MyButton :ButtonNext="ButtonNext"></MyButton>
        </router-link>
        <!--弹出选择框-->
        <Popup :popupVisible="popupVisible" @change='change'>
            <picker @cancel="cancel" :ChooseName="ChooseName" :slotData="slotData" @companyName="companyName"></picker>
        </Popup>
        <!--<div @click="buChen">123</div>-->
    </div>
</template>

<script>
    import ShowListInput from '@/components/ShowListInput.vue'
    import ShowList from '@/components/ShowList.vue'
    import Popup from '@/components/Popup.vue'
    import picker from '@/components/picker.vue'
    import MyButton from '@/components/MyButton.vue'
    import process from '@/components/process.vue'
    import { mapState,mapMutations} from 'vuex'
    import {Header} from 'mint-ui';
    export default {
        name: "Authentication",
        components: {
            ShowListInput,
            ShowList,
            picker,
            Popup,
            MyButton,
            process,
            Header
        },
        data() {
            return {
                ButtonNext: '下一步',
                color: {color: '#2dbbfd'},
                LegalPersonName: "法人姓名",
                IDNumber: '身份证号',
                PhoneNumber: "手机号",
                VerificationCode:'验证码',
                longTitle:'法人信息验证'
            }
        },
        computed:{

            ...mapState('Authentication',['popupVisible','ChooseName','OppName','phoneNumber',
                'LegalPersonNamePlaceholder','IDNumberPlaceholder','getCode','totalTime',
                'canClick','expirationDate','occupation','slotData','Verification',"phoneNumberData",'codaData','LegalPersonNameData','IDNumberData']),
                ...mapState('home',['InputValue'])
        },
        methods: {
            ...mapMutations('Authentication',['getSelectValue','showSelectList', 'selectCancle',
                'getPhoneNumberInputValue','getLegalPersonNameInputValue','getIDNumberInputValue',
                'selectChange','countDownData','getCodeData']),
            showList: function (value) {
                this.showSelectList(value)
            },
            cancel() {
                this.selectCancle()
            },
            change(){
                this.selectChange()
            },
            companyName: function (value) {
                if (this.OppName == "expirationDate") {
                    this.expirationDate[0].choose = value.join("-")
                } else if (this.OppName == "occupation") {
                    this.occupation[0].choose = value.join("-")
                }
            },
            countDown() {
                   this.countDownData()
            },
            inputChange(value){
                this.getInputValue(value)
            },
            PhoneNumberInputValue(value){
                this.getPhoneNumberInputValue(value)
            },
            LegalPersonNameInputValue(value){
                this.getLegalPersonNameInputValue(value)
            },
           IDNumberInputValue(value){
                this.getIDNumberInputValue(value)
            },
            CodeDataChange(value){
                this.getCodeData(value)
            },
            buChen(){
                console.log(this.LegalPersonNameData)
                console.log(this.IDNumberData)
                console.log(this.expirationDate[0].choose)
                console.log(this.phoneNumberData)
                console.log(this.codaData)
                console.log(this.occupation[0].choose)
                // console.log(this.$store.state.home.InputValue)
            }
        },

    }
</script>

<style scoped>
    .marT-10 {
        margin-top: 10px;
    }


    .showlist {
        position: relative;
        width: 100%;
        height: 3.125rem;
        line-height: 3.125rem;
        display: flex;
        background-color: #fff;
        /*margin-top: 6px;*/
        border-bottom: 1px solid #e0e3ea;
        font-size: 0.9rem;

    }

    /*.show-list-left {*/
        /*width: 5.5rem;*/
        /*text-align: left;*/
        /*padding-left: 10px;*/

    /*}*/

    /*.show-list-center {*/
        /*flex: 1;*/
        /*text-align: left;*/
        /*color: black;*/
        /*border: none;*/
        /*font-size: 0.9rem;*/
        /*outline: none;*/
        /*padding-left: 15px;*/
    /*}*/

    input::-webkit-input-placeholder {
        color: #e0e3ea;
    }

    .getCode {
        width: 5rem;
        height: 2rem;
        font-size: .75rem;
        line-height: 2rem;
        text-align: center;
        color: #fff;
        border-radius: .2rem;
        /*margin: auto 10px auto 0;*/
        background-color: #2dbbfd;
        position: absolute;
        right: 0.8125rem;
        top: 0.5625rem;


    }
</style>