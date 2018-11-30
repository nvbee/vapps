const state = {
    popupVisible: false,
    ChooseName: "",
    OppName: '',
    phoneNumber: '请填写法人有效手机号码(必填)',
    LegalPersonNamePlaceholder: '请填写法人姓名(必填)',
    IDNumberPlaceholder: '请填写法人身份证号(必填)',
    getCode:"发送验证码",
    totalTime: '60',
    canClick: true,//添加canClick
    Verification:'请填写收到的验证码',
    codaData:"",
    phoneNumberData:"",
    LegalPersonNameData:"",
    IDNumberData:"",
    expirationDate: [
        {name: 'expirationDate', content: '身份证有效期', all: '请选择有效期(必填)', choose: ''},
    ],
    occupation: [
        {name: 'occupation', content: '职业', all: '请选择法人所属职业(必填)', choose: ''}
    ],
    slotData: [
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
        if (value == 'expirationDate') {
            state.ChooseName = '身份有效期';
            state.slotData[0].values = ['2020年', '2021年', '2022年', '2023年']
        } else if (value == 'occupation') {
            state.ChooseName = '职业';
            state.slotData[0].values = ['各类专业技术人员', '国家机关、党群组织、企事业单位的负责人', '办事人员和有关人员', '商业工作人员', '服务性工作人员', '农林牧渔劳动者', '生产工作、运输工作和部分体力劳动者', '不便分类的其他劳动者']
        }
    },
    selectCancle(state){
        state.popupVisible = !state.popupVisible
    },
    selectChange(state){
        state.popupVisible= false
    },
    getCodeData(state,value){
        state.codaData=value
        // console.log(state.codaData)
    },
    getInputValue(state,value){
        state.InputValue=value
        // console.log(state.InputValue)
    },
    countDownData(state){
        if (isNaN(state.phoneNumberData) === false&&state.phoneNumberData.length==11){
            state.canClick = false
            state.getCode = state.totalTime + 's'
            let clock = window.setInterval(() => {
                state.totalTime--
                state.getCode = state.totalTime + 's'
                if (state.totalTime < 0) {
                    window.clearInterval(clock)
                    state.getCode = '重新发送验证码'
                    state.totalTime = 60;
                    state.canClick = true  //这里重新开启
                }
            }, 1000)
            return false
        }
        alert("请输入正确手机号码")
    },
    getPhoneNumberInputValue(state,value){
        state.phoneNumberData=value

    },
    getLegalPersonNameInputValue(state,value){
        state.LegalPersonNameData=value
        // console.log(state.InputValue)
    },
    getIDNumberInputValue(state,value){
        state.IDNumberData=value
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