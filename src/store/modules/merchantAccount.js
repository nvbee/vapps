const state = {
    popupVisible: false,
    ChooseName: "",
    OppName: "",
    placeholder: "请输入账户名称",
    inputValue:'',
    BankAccount: [
        {name: 'BankAccount', content: '结算银行账户', all: '请选择结算银行账户(必填)', choose: ''},
    ],
    BankAccountBank: [
        {name: 'BankAccountBank', content: '账户开户行', all: '请选择账户开户行(必填)', choose: ''},
        {name: 'BankBranch', content: '账户开户支行', all: '请选择账户开户支行(必填)', choose: ''},
    ],
    tipsData: ["所有认证账户必须为借记账户，该账户将作为银联商务向开户方资金入账的结算账户。", "请仔细核实账户信息。", "开户行以及开户支行将在您输入结算银行账户后系统自动识别检测"],
    slotData: [
        {
            flex: 1,
            values: ['上海银联商务有限公司'],
            className: 'slot1',
            textAlign: 'center',
        },
    ]
}

const getters = {}

const actions = {}

const mutations = {
    showSelectList(state, value) {
        state.popupVisible = !state.popupVisible
        state.OppName=value;
        if (value == 'BankAccount') {
            state.ChooseName = '结算银行账户';
            state.slotData[0].values = ['中国银行', '农业银行', '招商银行', '建设银行']
        } else if (value == 'BankAccountBank') {
            state.ChooseName = '账户开户行';
            state.slotData[0].values = ['静安支行', '浦东支行']
        } else if (value == 'BankBranch') {
            state.ChooseName = '账户开户支行';
            state.slotData[0].values = ['物流', '公职单位', '企业', '国企']
        }

    },
    selectCancle(state) {
        state.popupVisible = !state.popupVisible
    },

    selectChange(state) {
        state.popupVisible = false
    },
    getInputValue(state,value){
        state.inputValue=value
        console.log(state.InputValue)
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}