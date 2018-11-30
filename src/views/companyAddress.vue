<template>
    <div class="home">
        <mt-header :title="longTitle">
            <router-link to="/ShopPhoto" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <process :tocolor="tocolor"></process>
        <ShowList :entryData="companyAddress"  @showList="showList"></ShowList>
        <ShowListInput  :needData="needData" :placeholder="placeholder" @inputChange="inputChange" :inputValue="inputValue"></ShowListInput>
        <ShowList :entryData="industry"  class="marB-5" @showList="showList"></ShowList>
        <ShowList :entryData="auxiliary"  class="marB-5" @showList="showList"></ShowList>
        <ShowList :entryData="Other" @showList="showList"></ShowList>
        <router-link :to="{ path: '/merchantAccount'}" ><MyButton :ButtonNext="ButtonNext" ></MyButton></router-link>
        <!--弹出选择框-->
        <Popup :popupVisible="popupVisible"  @change='change'>
            <picker @cancel="cancel"  :ChooseName="ChooseName" :slotData="slotData" @companyName="companyName"></picker>
        </Popup>
        <!--<div @click="text">测试</div>-->
    </div>
</template>

<script>
    import ShowList from '@/components/ShowList.vue'
    import ShowListInput from '@/components/ShowListInput.vue'
    import MyButton from '@/components/MyButton.vue'
    import Popup from '@/components/Popup.vue'
    import picker from '@/components/picker.vue'
    import process from '@/components/process.vue'
    import { mapState,mapMutations } from 'vuex'
    import {Header} from 'mint-ui';



    export default {
        name: "companyAddress",
        components:{
            ShowList,
            ShowListInput,
            MyButton,
            Popup,
            picker,
            process,
            Header
        },
        data(){
            return{
                ButtonNext: '下一步',
                tocolor:{color: '#2dbbfd'},
                longTitle:'店铺信息验证'
            }
        },
        computed: {
            ...mapState('companyAddress',['popupVisible','ChooseName','needData','OppName',
                'placeholder','companyAddress','industry','auxiliary','Other','slotData','inputValue'])
        },
        methods:{
            ...mapMutations('companyAddress',['showSelectList','selectCancle','selectChange','getInputValue']),
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
                console.log(value)
                if(this.OppName=="companyAddress"){
                    this.companyAddress[0].choose=value.join("-")
                }else if(this.OppName=="industry"){
                    this.industry[0].choose=value.join("-")
                }else if(this.OppName=="auxiliary"){
                    this.auxiliary[0].choose=value.join("-")
                }else if(this.OppName=="Other"){
                    this.Other[0].choose=value.join("-")
                }
            },
            inputChange(value){
                this.getInputValue(value)
            },
            text() {
                console.log(this.companyAddress[0].choose)
                console.log(this.inputValue    )
                console.log(this.industry[0].choose)
            }
        }
    }
</script>

<style scoped>
    .marB-5{
        margin-bottom: 5px;
    }
.home {
    background-color: #eff0f1;
    width: 100%;
    height: 400px;
}
</style>