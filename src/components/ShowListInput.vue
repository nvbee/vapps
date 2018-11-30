<template>
    <div class="show-list">
        <div class="show-list-left">{{needData}}</div>
        <input type="text" :placeholder=placeholder class="show-list-center"
               :value="inputValue"
               @input="inputDataChange($event)">
        <div class="icon icon-delete" v-if="Flag" @click="clear"></div>
    </div>
</template>

<script>

    export default {
        name: "ShowListInput",
        data() {
            return {
                Flag: ''
            }
        },
        props: {
            needData: {
                type: String
            },
            placeholder: {
                type: String
            },
            inputValue: {
                type: String
            },

        },
        watch: {
            inputValue: function (newQuestion) {
                if (newQuestion == '') {
                    this.Flag = false
                } else {
                    this.Flag = true
                }
            }
        },
        methods: {
            inputDataChange(event) {
                let value = event.target.value;
                this.$emit('inputChange', value);

            },
            clear() {
                this.inputDataChange(event)
            }

        },

    }
</script>

<style scoped>
    .show-list {
        width: 100%;
        height: 3.125rem;
        line-height: 3.125rem;
        display: flex;
        background-color: #fff;
        /*margin-top: 6px;*/
        border-bottom: 1px solid #e0e3ea;
        font-size: 0.8rem;

    }

    .show-list-left {
        width: 5.5rem;
        text-align: left;
        padding-left: 10px;

    }

    .show-list-center {
        flex: 1;
        text-align: left;
        color: black;
        border: none;
        font-size: .8rem;
        outline: none;
        /*padding-left: 10px;*/
    }

    input::-webkit-input-placeholder {
        color: #e0e3ea;
    }

    .icon {
        width: 1.375rem;
        height: 1.375rem;
        background-size: 100% 100%
    }

    .icon-delete {
        background-image: url(../assets/images/icon-delete.png);
        /*display: none;*/
        margin: auto 10px;
    }
</style>