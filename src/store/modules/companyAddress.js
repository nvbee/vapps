import router from '@/router'
const state = {
    popupVisible :false,
    ChooseName:"",
    needData:"详细地址",
    OppName:'',
    placeholder:'请输入详细地址',
    inputValue:'',
    companyAddress: [
        {name:'companyAddress',content: '经营地址', all: '请选择经营地址(必填)',choose:''},
    ],
    industry:[
        {name:'industry',content: '所属行业', all: '请选择所属行业(必填)',choose:''},
    ],
    auxiliary:[
        {name:'auxiliary',content: '辅助证明材料', all: '请上传辅助证明材料(必填)',choose:''},
    ],
    Other:[
        {name:'Other',content: '其他材料', all: '上传相关行业资格证(选填)',choose:''},
    ],
    slotData:[
        {
            flex: 1,
            values: [],
            className: 'slot1',
            textAlign: 'center',
        },
    ]
}

const getters ={

}

const actions = {

}

const mutations ={
    showSelectList (state, value){
        state.OppName=value;
        if(value=='companyAddress'){
            state.ChooseName='经营地址';
            state.slotData[0].values=['浦东新区','青浦','静安区','长宁区']
            state.popupVisible = !state.popupVisible
        }else if(value=='industry'){
            state.ChooseName='所属行业';
            state.slotData[0].values=['物流','公职单位','企业','国企']
            state.popupVisible = !state.popupVisible
        }else if(value=='auxiliary'){
            router.push('auxiliary')
        }else if (value=='Other'){

        }
    },
    selectCancle(state){
        state.popupVisible = !state.popupVisible
    },
    selectChange(state){
        state.popupVisible= false
    },
    getInputValue(state,value){
        state.inputValue=value
        // console.log(state.InputValue)
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}