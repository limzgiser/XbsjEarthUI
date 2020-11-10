<template>
<Window :footervisible="true" @cancel="cancel" @ok="ok" v-show="show" :height="420" :width="500" :minWidth="202" :left="200" :top="150" :title="lang.title" class="xbsj-onlineImage">
    cccccccccccccccc
</Window>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            show: true,
            sceneList: []
        };
    },
    created() {},
    mounted() {
        this.getSceneList();
    },
    methods: {
        hideOpenScene() {
            this.$emit("hideOpenScene");
        },
        getSceneList() {
            var labServer = this.$root.$labServer;
            let url = labServer.server + "scenes/";
            axios
                .get(url, {
                    params: {}
                })
                .then(res => {
                    this.sceneList = res.data.results.list;
                    console.log(res.data.results.list);
                    //   if(res.data.status){

                    //   }
                });
        },
        cancel() {
            this.show = false;
            // this.hideOpenScene();

            // if (this._imagelayer) this._imagelayer.destroy();
            // this._imagelayer = undefined;
            // this.selected = undefined;
        },
        ok() {
            // if (this.selectedUrl == "") {
            //     //提示需要弹出url
            //     this.error = this.lang.selectinput;
            //     this.$root.$earthUI.promptInfo(this.error, "error");
            // } else {
            //     //构造imagerylay

            //     var url = this.selectedUrl;
            //     if (this.selected && this.selected.requireField) {
            //         if (!this.requireValue || this.requireValue == "") {
            //             this.$root.$earthUI.promptInfo(
            //                 "please input require value",
            //                 "error"
            //             );
            //             return;
            //         }
            //         url += "&" + this.selected.requireField + "=" + this.requireValue;
            //     }

            //     var imageLayer = new XE.Obj.Imagery(this.$root.$earth);

            //     imageLayer.xbsjImageryProvider = {
            //         type: "XbsjImageryProvider",
            //         XbsjImageryProvider: {
            //             url: url,
            //             srcCoordType: this.srcCoordType,
            //             dstCoordType: this.dstCoordType
            //         }
            //     };

            //     //添加到场景树中
            //     this.$root.$earthUI.tools.sceneTree.addSceneObject(
            //         imageLayer,
            //         this.getName(this.selected)
            //     );

            //     this.show = false;
            //     this.error = "";
            // this.hideOpenScene();
            this.cancel();
            // }
        }
    },

    beforeDestroy() {
        this.show = true;
    }
};
</script>

<style scoped>
.popup {
    width: 420px;
    height: 350px;
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
