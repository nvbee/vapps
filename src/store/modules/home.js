const state = {
    OppName:'',
    popupVisible :false,
    ChooseName:"",
    inputValue:'',
    entryData: [
        {name:'mechanism',content: '收单机构', all: '收单机构选择(必填)',choose:''},
        {name:'department',content: '业务部', all: '业务部选择(选填)',choose:''},
        {name:'recommend',content: '推荐方', all: '选择推荐方(选填)',choose:''},
    ],
    tipsData:["已有二维码，请扫码绑定。扫码后将自动录入信息，并且录入信息可编辑。","没有二维码，请手动填写信息。"],
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
        state.popupVisible = !state.popupVisible
        state.OppName=value;
        if(value=='mechanism'){
            state.ChooseName='收单机构选择';
            state.slotData[0].values=['上海银联商务有限公司']
        }else if(value=='department'){
            state.ChooseName='业务部选择';
            state.slotData[0].values=['上海银商全辖']
        }else if(value=='recommend'){
            state.ChooseName='推荐方选择';
            state.slotData[0].values=['中国工商银行','中国农业银行','中国建设银行']
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