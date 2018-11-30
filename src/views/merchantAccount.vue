<template>
    <div class="home">
        <mt-header :title="longTitle">
            <router-link to="/companyAddress" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <process :gotocolor="gotocolor"></process>
        <ShowList :entryData="BankAccount" @showList="showList"></ShowList>
        <ShowListInput :needData="needData"  class="marT-5" :placeholder="placeholder" @inputChange="inputChange" :inputValue="inputValue"></ShowListInput>
        <ShowList :entryData="BankAccountBank" @showList="showList"></ShowList>
        <tips v-for="tips of tipsData" :tips="tips"></tips>
        <router-link :to="{ path: '/agreement'}" ><MyButton :ButtonNext="ButtonNext" ></MyButton></router-link>
        <!--下面机构选择等弹出框-->
        <Popup :popupVisible="popupVisible" @change="change">
            <picker @cancel="cancel" :ChooseName="ChooseName" :slotData="slotData" @companyName="companyName"></picker>
        </Popup>
    </div>
</template>
<script>
    import MyButton from '@/components/MyButton.vue'
    import ShowList from '@/components/ShowList.vue'
    import tips from '@/components/tips.vue'
    import ShowListInput from '@/components/ShowListInput.vue'
    import Popup from '@/components/Popup.vue'
    import picker from '@/components/picker.vue'
    import process from '@/components/process.vue'
    import { mapState,mapMutations } from 'vuex'
    import {Header} from 'mint-ui';


    export default {
        name: "merchantAccount",
        components: {
            MyButton,
            ShowList,
            tips,
            ShowListInput,
            Popup,
            picker,
            process,
            Header
        },
        computed: {
            ...mapState('merchantAccount',['popupVisible','ChooseName','OppName',
                'placeholder','BankAccount','BankAccountBank','slotData','inputValue'])
        },
        data() {
            return {
                ButtonNext: '下一步',
                gotocolor:{color: '#2dbbfd'},
                needData: '账户名称',
                tipsData: ["所有认证账户必须为借记账户，该账户将作为银联商务向开户方资金入账的结算账户。", "请仔细核实账户信息。", "开户行以及开户支行将在您输入结算银行账户后系统自动识别检测"],
                longTitle:'商户账户信息'

        }},
        methods: {
            ...mapMutations('merchantAccount',['showSelectList','selectCancle','selectChange','getInputValue']),
            showList: function (value) {
               this.showSelectList(value)
            },
            cancel() {
                this.selectCancle()
            },
            change() {
                this.selectChange()
            },
            companyName:function(value){
                if(this.OppName=="BankAccount"){
                    this.BankAccount[0].choose=value.join("-")
                }else if(this.OppName=="BankAccountBank"){
                    this.BankAccountBank[0].choose=value.join("-")
                }else if(this.OppName=="BankBranch"){
                    this.BankAccountBank[1].choose=value.join("-")
                }
            },inputChange(value){
                this.getInputValue(value)
            },
            buchen(){
                console.log(this.inputValue)
                console.log(this.BankAccount[0].choose)
                console.log(this.BankAccountBank[0].choose)
                console.log(this.BankAccountBank[1].choose)
            }

        },
    }
</script>
<style scoped>
    .marT-5{
        margin-top: 5px;
    }
</style>