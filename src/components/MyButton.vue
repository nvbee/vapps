<!--按钮下一步/完成-->
<template>
    <div>
        <mt-button type="primary" size="large" class='btn-fix'  :disabled='disabledData'>{{ButtonNext}}</mt-button>
    </div>
</template>
<script>
    import {Button} from 'mint-ui';

    export default {
        name: "MyButton",
        components: {
            Button
        },
        data() {
            return {
                disabledData: this.disabled
            }
        },
        props: {
            ButtonNext: {
                type: String
            },
            disabled: {
                type: Boolean,

            }
        },
        watch: {
            disabled(value) {
                console.log(value);
                this.disabledData = value
            }
        },
        mounted(){
            console.log(this. disabledData)
        }
    }
</script>
<style scoped>
    .btn-fix {
        position: fixed;
        bottom: 0;
        left: 0;
    }
</style>