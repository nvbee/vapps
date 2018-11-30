<!--选择弹出框列表-->
<template>
    <div>
        <div class="show-list"
             v-for="(item, index) in entryData"
             :key="`${_uid}_${index}`"
             @click="click(item.name)"
        >
            <div    class="show-list-left">{{item.content}}</div>
            <div v-if="!item.choose" class="show-list-center">{{item.all}}</div>
            <div v-else class="show-list-center-choose">{{item.choose}}</div>
        <div class="show-list-right"></div></div>
    </div>
</template>

<script>
    export default {
        name: "ShowList",
        props: {
            entryData: {
                type: Array,
            },

        },
        mounted() {
            // console.log(this.entryData)

        },
        methods: {
            click(name) {
                this.$emit('showList',name)
            }
        }
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
        color: #e0e3ea;
        /*padding-left: 15px;*/
    }
    .show-list-center-choose {
        flex: 1;
        text-align: left;
        overflow: hidden;
        /*padding-left: 15px;*/

    }

    .show-list-right {
        background-image: url(../assets/icon-right.png);
        margin: auto 10px;
        width: 1.375rem;
        height: 1.375rem;
        background-size: 100% 100%;
    }

</style>