<template>
    <div class="PeoplePictureBox">
            <img    v-for="(item, index) in PeoplePicture"
                    :key="`${_uid}_${index}`"
                    :src='item.img' class="PeoplePictureImg"
                    @click="click(item.name)">
    </div>
</template>

<script>
    export default {
        name: "PeoplePicture",
        props:{
            PeoplePicture:{
                type:Array
            }
        },
        methods: {
            click(name) {
                this.$emit('photo',name)
            }
        }
    }
</script>

<style scoped>
.PeoplePictureBox{
    background: white;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    flex:1;
}
    .PeoplePictureImg{
        padding-top: .75rem;
        width: 9rem;
        height: 6rem;
        background-size: 100% 100%;
        margin: 0 auto;
    }
</style>