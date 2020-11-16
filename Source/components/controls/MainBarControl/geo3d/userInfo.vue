<template>
<div class="login-info-pancel">

    <span class="login-g1">当前用户：</span>
      <span class="login-name">管理员</span>
    <span class="login-g2 exit" @click="exitlogin()">退出</span>
    <div class="login-g2 full-screen" @click="switchFullScreen()">
        <img :src="require('../../../../images/geo3d/icon_fullscreen.png')" />
    </div>
</div>
</template>

<script>
import screenfull from "screenfull";

export default {
    data() {
        return {
            isFullscreen: true
        };
    },
    created() {},
    mounted() {},
    computed: {},
    methods: {
        exitlogin() {
            sessionStorage.removeItem("isLogin");

            var params = window.location.href.split('?scene=');
            if (params.length > 1) {
                var url = './login.html?scene=' + params[1];
                window.location.href = url;
            } else {
                window.location.href = './login.html';
            }

        },
        switchFullScreen() {
            screenfull.toggle();
        }
    },
    beforeDestroy() {}
};
</script>

<style scoped>
.login-info-pancel {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.login-info-pancel>span {
 
}
.login-name{
    
    border-bottom:1px solid #fff;
 
    
}

.login-g1 {
    color: #b3b3b3;
    margin-right: 10px;
}

.exit {
    margin-left: 15px;
}

.login-g2 {
    color: #fff;
}

.exit {
    cursor: pointer;
}

.full-screen {
    cursor: pointer;
    margin-left: 10px;
}
</style>
