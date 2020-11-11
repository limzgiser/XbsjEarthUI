<template>
<Window :footervisible="true" @cancel="cancel" @ok="ok" v-show="show" :height="420" :width="520" :minWidth="202" :left="200" :top="150" title="打开场景" class="xbsj-onlineImage">
    <div class="container">
        <div class="item" v-for="item in sceneList" :key="item.id" @click="sceneItemClick(item)">
            <div>
                <img class="imgsty" :class="{ selectedItem: selectScene && item.id === selectScene.id }" style="width:64px;height:64px;" :src="item.thumbnail" alt />
            </div>
            <div class="item-name" :title="item.name">
                {{ item.name }}
            </div>
            <span @click.self="deleteScene(item)" class="closeitem">X</span>
        </div>
    </div>
</Window>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            show: true,
            sceneList: [],
            selectScene: null,

        };
    },
    created() {},
    mounted() {
        this.getSceneList();
    },
    methods: {
        sceneItemClick(item) {
            if(!item){
                return ;
            }
            this.selectScene = item;
        },
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
                    this.sceneList = [{
                            id: '',
                            name: "空场景",
                                  summary:'场景描述信息',
                            'thumbnail': 'data:image/jpeg;base64,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'
                        },

                        ...res.data.results.list
                    ];
                });
        },
        deleteScene(item) {
            if (!item.id) {
                return;
            }
            var labServer = this.$root.$labServer;
            let url = labServer.server + "scenes/delete/" + item.id + "/";
            axios
                .post(url, {
                    params: {}
                })
                .then(res => {
                    console.log(res);
                    if (res.data.message == "ok") {
                        this.$root.$earthUI.promptInfo("删除场景成功:" + item.id);
                        this.getSceneList();
                    } else {
                        this.$root.$earthUI.promptInfo("删除场景失败:" + item.id);
                    }
                });
        },
        cancel() {
            this.show = false;
            this.hideOpenScene();
        },
        ok() {
            if (this.selectScene) {
                let id = this.selectScene.id;
                this.$root.$earthUI.labScene.loadScene(id);
            } else {
                this.$root.$earthUI.promptInfo("未选中场景");
            }
         
         this.$emit("hideOpenScene");
            // this.show = false;
            //  }
        }
    },

    beforeDestroy() {
        // this.show = false;
    },
    
};
</script>

<style scoped>
.container {
 
    display: flex;
    padding: 10px;
    flex-wrap: wrap;
    align-items: center;
   
}

.item {
    width: 78px;
    height: 101px;
    display: flex;
    flex-direction: column;
    align-items: center;
 
    cursor: pointer;
    position: relative;
    box-sizing: border-box;
}

.imgsty {
    box-sizing: border-box;
    border: 2px solid #fff;
    border-radius: 3px;
}

.selectedItem {
    border: 2px solid #1fffff;
}

.closeitem {
position: absolute;
    right: 1px;
    top: -7px;
    font-size: 12px;
    color: #000;
    cursor: pointer;
    z-index: 300;
    display: flex;
    width: 14px;
    height: 14px;
    border: 1px solid #000;
    align-items: center;
    justify-content: center;
    border-radius: 7px;
    background: #eee;
}

.item-name {
    width: 64px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
