<template>
<div class="xbsj-nav" @click="hidePopup" v-show="show">
<div class="user-adm">
<userInfoComp></userInfoComp>
</div>

    <div class='top-menu'>
        <img :src="logoImg" class="logo-img">
       <div class="menu-title">
        <div class="top">
            吴江经济技术开发区
        </div>
         <div class="bottom">
            城市三维空间管理系统
        </div>
        </div>
        
        <ul class="xbsj-title-ul" >
     
            <li   v-if="menuConfig && menuConfig.navigate"  @click="switchPage('navigate')" :class="{'xbsj-title-item-on':page=='navigate'}">{{lang.roam}}</li>
            <li   v-if="menuConfig && menuConfig.view"    @click="switchPage('view')" :class="{'xbsj-title-item-on':page=='view'}">{{lang.view}}</li>
            <li   v-if="menuConfig && menuConfig.imagery"   @click="switchPage('imagery')" :class="{'xbsj-title-item-on':page=='imagery'}">{{lang.images}}</li>
            <li   v-if="menuConfig && menuConfig.model"   @click="switchPage('model')" :class="{'xbsj-title-item-on':page=='model'}">{{lang.model}}</li>
            <li   v-if="menuConfig && menuConfig.terrain"   @click="switchPage('terrain')" :class="{'xbsj-title-item-on':page=='terrain'}">{{lang.terrain}}</li>
            <li   v-if="menuConfig && menuConfig.analysis"   @click="switchPage('analysis')" :class="{'xbsj-title-item-on':page=='analysis'}">{{lang.analysis}}</li>
            <li   v-if="menuConfig && menuConfig.effect"   @click="switchPage('effect')" :class="{'xbsj-title-item-on':page=='effect'}">{{lang.effect}}</li>

            <li   v-if="menuConfig && menuConfig.entity"   @click="switchPage('entity')" :class="{'xbsj-title-item-on':page=='entity'}">{{lang.plotting}}</li>

            <li   v-if="menuConfig && menuConfig.other"   @click="switchPage('other')" :class="{'xbsj-title-item-on':page=='other'}">{{lang.other}}</li>
            <!-- <li @click="openmodel">测试model对话框</li> -->
        </ul>
    </div>

    <!-- <Modal :visible="visible" @cancel="cancelmodal" @confirm="confirm">
      <p>我是想要提示的内容</p>
        <p>我是想要提示的内容</p>
          <p>我是想要提示的内容</p>  
    </Modal>-->
    <!-- 七大组件部分 -->
    <div>
        <NavigateComp ref="navigate"     :menuConfig = menuConfig v-show="page=='navigate'" :labServiceUI="labServiceUI"></NavigateComp>
        <XbsjViewComp ref="view"   :menuConfig = menuConfig   v-show="page=='view'"     ></XbsjViewComp>
        <ImageryComp ref="imagery" :menuConfig = menuConfig   v-show="page=='imagery'" :cloudServiceUI="cloudServiceUI" :labServiceUI="labServiceUI"></ImageryComp>
        <TilesetComp ref="model"   :menuConfig = menuConfig   v-show="page=='model'"   :cloudServiceUI="cloudServiceUI" :labServiceUI="labServiceUI"></TilesetComp>
        <TerrainComp ref="terrain" :menuConfig = menuConfig   v-show="page=='terrain'" :cloudServiceUI="cloudServiceUI" :labServiceUI="labServiceUI"></TerrainComp>
        <AnalysisComp ref="analysis" :menuConfig = menuConfig  v-show="page=='analysis'"></AnalysisComp>
        <EffectComp ref="effect"   :menuConfig = menuConfig   v-show="page=='effect'"  ></EffectComp>
        <EntityComp ref="entity"  :menuConfig = menuConfig    v-show="page=='entity'"  ></EntityComp>
        <OtherComp ref="other"   :menuConfig = menuConfig     v-show="page=='other'"   ></OtherComp>
    </div>
</div>
</template>

<script>
import NavigateComp from "./Navigate";
import XbsjViewComp from "./View";
import ImageryComp from "./Imagery";
import TilesetComp from "./Tileset";
import TerrainComp from "./Terrain";
import AnalysisComp from "./Analysis";
import EffectComp from "./Effect";
import EntityComp from "./Entity";
import OtherComp from "./Other";
import languagejs from "./index_locale";
import logoImg from "../../../images/geo3d/logo.png";
import userInfoComp from './geo3d/userInfo'
import menu from './menu.config';
export default {
    components: {
        NavigateComp,
        XbsjViewComp,
        ImageryComp,
        TilesetComp,
        TerrainComp,
        AnalysisComp,
        EffectComp,
        EntityComp,
        OtherComp,
        userInfoComp
    },
    data: function () {
        return {
            show: true,
            page: "navigate", //当前显示的页面
            lang: {},
            visible: false,
            labServiceUI: true,
            cloudServiceUI: false,
            langs: languagejs,
            logoImg: logoImg,
            menuConfig:menu
        };
    },
    created() {},
    mounted() {
    
        // var search = window.location.search;
        // window.labserver = this.getSearchString("labserver", search);
        // if (window.labserver !== undefined) {
        //   this.$root.$labServer.server = window.labserver;
        // }
    },
    methods: {
        // //key(需要检索的键） url(传入的需要分割的url地址)
        // getSearchString(key, Url) {
        //   var str = Url;
        //   str = str.substring(1, str.length); // 获取URL中?之后的字符（去掉第一位的问号）
        //   // 以&分隔字符串，获得类似name=xiaoli这样的元素数组
        //   var arr = str.split("&");
        //   var obj = new Object();
        //   // 将每一个数组元素以=分隔并赋给obj对象
        //   for (var i = 0; i < arr.length; i++) {
        //     var tmp_arr = arr[i].split("=");
        //     obj[decodeURIComponent(tmp_arr[0])] = decodeURIComponent(tmp_arr[1]);
        //   }
        //   return obj[key];
        // },
        openmodel() {
            this.$root.$earthUI.confirm(
                "xxxx",
                () => {},
                () => {}
            );
        },
        cancelmodal() {
            this.visible = false;
        },
        confirm() {
            alert("我点击了确定");
            this.visible = false;
        },
        hidePopup(event) {},
        switchPage(page) {
            this.$emit("hidePopup");
            //控制组件显示隐藏
            if (this.page == page) {
                this.page = "";
            } else {
                
                this.page = page;
            }
        },
        showPage(page) {
            this.$emit("hidePopup");
            this.page = page;
        },
        getSize() {
            //获取当前组件的大小
            return {
                width: this.$el.offsetWidth,
                height: this.$el.offsetHeight
            };
        }
    }
};
</script>

<style>
.user-adm{
    position:absolute;
    right:20px;
    height:60px;

}
.menu-title{
    display: flex;
    flex-direction: column;
    margin-right: 30px;
    height:60px;
    justify-content: center;
}
.top{
    width: 149px;
height: 21px;
font-size: 16px;
font-family: Microsoft YaHei;
font-weight: bold;
line-height: 32px;
color: #FFFFFF;
 display:flex;
 align-items: center;
opacity: 1;

}
.bottom{
    width: 200px;
height: 26px;
font-size: 20px;
font-family: Microsoft YaHei;
font-weight: bold;
line-height: 32px;
color: #FFFFFF;
  display:flex;
 align-items: center;
opacity: 1;

}
.top-menu {
    display: flex;
    background: #474747;
    height: 60px;
    padding-left: 20px;
    align-items: center;
}

.logo-img {
    margin-right: 10px;
}

.xbsj-nav {
    z-index: 9999;
    position: relative;
}

/* .xbsj-template {
  width: 100%;
  height: 96px;
  background: rgba(107, 107, 107, 1);
} */
.xbsj-title-ul {

    width: 100%;
    background: #474747;
    /** height: 41px;*/
    min-width: 656px;

}

.xbsj-title-ul li {
    float: left;
    width: 70px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    font-size: 14px;
    /* border: 1px solid; */
    cursor: pointer;
}

.xbsj-title-ul li:hover {
    background: #6b6b6b;
}

.xbsj-title-item-on {
    background: #6b6b6b;
}
</style>
