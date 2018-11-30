<!--配合picker显示选择框-->
<template>
    <div>
        <mt-popup
                v-model="popupVisibleData"
                position="bottom"
                >
          <slot></slot>
        </mt-popup>
    </div>
</template>

<script>
    import { Popup } from 'mint-ui';
    export default {
        name: "Popup",
        components:{Popup},
        data(){
            return{
                popupVisibleData:this.popupVisible
            }
        },
        props:{
            popupVisible:{
                type:Boolean
            },
        },
        methods:{
        },
        watch:{
            popupVisible(value){
                // console.log(value)
                this.popupVisibleData= value
            },
            popupVisibleData ( value) {
                // console.log(value)
                if ( !value ) {
                   this.$emit('change')
                }
            }
        }
    }
</script>
<style scoped>
</style>