<!--配合popup显示选择框-->
<template>
    <div>
        <div class="picker-choose">
            <span class="picker-choose-cancel" @click="CancelPicker">取消</span>
            <span class="picker-choose-name">{{ChooseName}}</span>
            <span class="picker-choose-sure" @click="choosePicker" >确定</span>
        </div>
        <mt-picker :slots="slots" @change="onValuesChange" :visibleItemCount="visibleItemCount"
                   :itemHeight="itemHeight"></mt-picker>
    </div>
</template>

<script>
    import {Picker} from 'mint-ui';

    export default {
        name: "picker",
        components: {
            Picker
        },
        data() {
            return {
                visibleItemCount: 3,
                itemHeight: 60,
                slots: this.slotData,

            }
        },
        props: {
            ChooseName: {
                type:String
            },
            slotData:{
                type:Array
            },

        },
        methods: {
            onValuesChange(picker, values) {
                if (values[0] > values[1]) {
                    console.log(picker,values)
                    picker.setSlotValue(1, values[0]);
                }
              this.companyName=values
            },
            choosePicker(){
                this.$emit("companyName",this.companyName)
                this.$emit('cancel')
                
    },
            CancelPicker() {
                /*console.log(this.$store.state.MyName)
                this.$store.state.MyName = ! this.$store.state.MyName*/
                this.$emit('cancel')
            }
        },
        mounted(){
            console.log(this.slotData)
        }
    }
</script>

<style scoped>
    .picker-choose {
        display: flex;
        background: #eee;
        height: 44px;
        line-height: 44px;
    }
    .picker-choose-cancel,
    .picker-choose-sure {
        color: #e94643;
        flex: 1;
    }
    .picker-choose-name {
        flex: 1;
    }
</style>