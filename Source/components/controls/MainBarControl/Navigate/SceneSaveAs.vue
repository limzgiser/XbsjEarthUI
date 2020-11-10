<template>
<div class="xbsj-mainbar-popup popup">
    <div>
        <label>{{ lang.sceneName }}:</label>
        <!--  修改原来是 @keyup.enter-->
        <input class="inputstyle" v-model="sceneName" @keyup="updateName" />
    </div>
    <div class="sceneDes">
        <label style="margin-right:3px;">{{ lang.sceneDes }}:</label>
        <!--  修改原来是 @keyup.enter-->
        <textarea class="inputstyle" rows="2" v-model="sceneDes" @keyup="updateSceneDes" />
    </div>
    <div style="margin-top:10px;">
        <label>{{ lang.thumbnail }}:</label>
        <XbsjCaptureThumbnail style="float:right;width: calc(100% - 55px);height: 96px;" :value="thumbnail" @changed="updateThumbNail"></XbsjCaptureThumbnail>
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
            sceneDes: "场景描述信息",
            thumbnail: ""
        };
    },
    created() {},
    mounted() {},
    methods: {
        updateThumbNail(img) {
            this.thumbnail = img;
            // 另存场景雪碧图
            // this.$root.$earthUI.labScene.updateThumbNail(img);
            // this.$root.$earthUI.labScene.saveAsThumbNail(img);
        },
        updateName() {
            // this.$root.$earthUI.labScene.updateName();
            this.$root.$earthUI.labScene.saveAsSceneInfo(this.paramsInfo);
        },
        updateSceneDes() {
            // this.$root.$earthUI.labScene.updateSaveAsSceneDes(this.sceneDes);
            this.$root.$earthUI.labScene.saveAsSceneInfo(this.paramsInfo);
        },

    },
    computed: {
        paramsInfo: function () {
            return {
                name: this.sceneName,
                summary: this.sceneDes,
                thumbnail: this.thumbnail
            }
        },
    },

    beforeDestroy() {}
};
</script>

<style scoped>
.popup {
    width: 312px;
    height: 185px;
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
