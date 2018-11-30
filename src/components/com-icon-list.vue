<template>
    <div class="sudoku_row">
        <div class="sudoku_item " :class="curSelect==sudoku.id?'opacity':''" v-for="(sudoku,index) in sudokus"
             :key="index" @touchstart="touchstart(index)" @touchend="touchend">
            <img :src="sudoku.img_src" width="" height="120">
            {{sudoku.name}}
        </div>
    </div>
</template>
<script>
    export default {
        name: 'sudoku',
        data() {
            return {
                sudokus: [{
                    id: 0,
                    img_src: require('../assets/ApplySubmit/icon-1.png')
                }, {
                    id: 1,
                    img_src: require('../assets/ApplySubmit/icon-2.png')
                }, {
                    id: 2,
                    img_src: require('../assets/ApplySubmit/icon-3.png')
                }, {
                    id: 3,
                    img_src: require('../assets/ApplySubmit/icon-4.png')
                }, {
                    id: 4,
                    img_src: require('../assets/ApplySubmit/icon-5.png')
                }, {
                    id: 5,
                    img_src: require('../assets/ApplySubmit/icon-6.png')
                }, {
                    id: 6,
                    img_src: require('../assets/ApplySubmit/icon-7.png')
                }, {
                    id: 7,
                    img_src: require('../assets/ApplySubmit/icon-8.png')
                }, {
                    id: 8,
                    img_src: require('../assets/ApplySubmit/icon-9.png')
                }, {
                    id: 9,
                    img_src: require('../assets/ApplySubmit/icon-10.png')
                }, {
                    id: 10,
                    img_src: require('../assets/ApplySubmit/icon-11.png')
                }, {
                    id: 10,
                    img_src: require('../assets/ApplySubmit/icon-12.png')
                },

                ],
                curSelect: null
            };
        },
        methods: {
            touchstart: function (e) {
                var that = this;
                var list = that.sudokus;
                for (var i = 0, len = list.length; i < len; ++i) {
                    if (list[i].id == e) {
                        that.curSelect = i;
                    }
                }
            }, touchend: function () {
                var that = this;
                that.curSelect = null;
            }
        }
    };
</script>
<style>
    .sudoku_row {
        display: flex;
        align-items: center;
        width: 100%;
        flex-wrap: wrap;
    }
    /*.sudoku_row>div :nth-child(2n+1){*/
        /*!*border: 1px solid red;*!*/
        /*border-bottom: 1px solid black;*/
        /*border-left: 1px solid black;*/
    /*}*/

    .sudoku_item {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 25%;
        /*padding-top: 10px;*/
        /*padding-bottom: 10px;*/
    }

    .opacity {
        opacity: 0.4;
        background: #e5e5e5;
    }

    .sudoku_item img {
        margin-bottom: 3px;
        display: block;
    }
</style>