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

                },
                en: {
                    sceneName: "SceneName",
                    sceneDes: "Scene Des",

                }
            },
            lang: undefined,
            sceneName: "新建场景",
            sceneID: undefined,
            sceneDes: "场景描述信息"

        };
    },
    created() {},
    mounted() {
        // console.log(123);
    },
    methods: {

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

            }
        },
    },
    watch: {

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
