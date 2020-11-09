<template>
<div class="xbsj-mainbar-popup popup">
    <div>
        场景 打开 <h1></h1>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            langs: {
                zh: {
                    sceneName: "场景名称",
                    sceneDes: "场景描述",
                    thumbnail: "缩略图"
                },
                en: {
                    sceneName: "Scene Name",
                    sceneDes: "Scene Des",
                    thumbnail: "Thumb"
                }
            },
            lang: undefined,
            sceneName: "新建场景",
            sceneID: undefined,
            sceneDes: '',
            thumbnail: ""
        };
    },
    created() {

    },
    mounted() {},
    methods: {
        updateThumbNail(img) {
            // this.$root.$earthUI.labScene.updateThumbNail(img);
            this.$root.$earthUI.labScene.saveThumbNail(img);
        },
        updateName() {
            this.$root.$earthUI.labScene.updateName();
        },
        updateSceneDes() {
            this.$root.$earthUI.labScene.updateSceneDes(this.sceneDes);
        }
    },

    beforeDestroy() {}
};
</script>

<style scoped>
.popup {
    width: 312px;
    height: 250px;
}

.sceneDes {
    margin-top: 10px;
    display: flex;
    align-items: center;

}

.inputstyle {
    height: 22px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 3px;
    border: none;
    color: #dddddd;
    padding-left: 10px;
}

.inputstyle:focus {
    outline: 1px solid rgba(31, 255, 255, 1);
}
</style>
