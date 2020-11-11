<template>
  <div class="xbsj-mainbar-popup popup" ref="searchbox">
    <div v-show="loading">{{lang.searching}}</div>
    <div v-show="error!=''">{{error}}</div>
    <ul>
      <li v-show="results.length!=''" v-for="(item,index) in results" :key="index">
        <div class="xbsj-search-item" @click="selectItem(item)">
          <div>{{item.name}}</div>
          <span>{{lang.position}}</span>
          <div class="xbsj-weizhi">
            <span>{{item.location.lng.toFixed(5)}}</span>
            <span>{{item.location.lat.toFixed(5)}}</span>
          </div>
          <div>
            <span>{{item.province}}</span>-
            <span>{{item.city}}</span>-
            <span>{{item.district}}</span>
          </div>
          <!-- <div class="xbsj-map">{{lang.provider}}-{{item.provider}}</div> -->
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      langs: {
        zh: {
          searching: "正在查询...",
          position: "位置:",
          provider: "来自-"
        },
        en: {
          searching: "search ...",
          position: "Position:",
          provider: "Provider-"
        }
      },
      lang: undefined,
      loading: false,
      error: "",
      results: []
    };
  },
  created() {},
  mounted() {},
  methods: {
    query(key) {
      this.loading = true;
      this.error = "";
      this.results = [];

      this.$root.$labServer
        .geocoder(key)
        .then(result => {
          this.loading = false;
          this.results = result;
        })
        .catch(error => {
          this.loading = false;
          this.error = error.message || error;
        });
    },
    newView(item) {
      let cvm = this.$root.$earth.cameraViewManager;
      cvm
        .newView()
        .then(view => {
          view.name = item.name;
          cvm.views.push(view);
        })
        .catch(err => {
          console.log(err);
        });
    },
    selectItem(item) {
      this.$emit("itemSelected", item);
      let viewer = this.$root.$earth.czm.viewer;

      if (this._entity) this.clear();

      //创建定位图标 并飞行
      this._entity = viewer.entities.add({
        position: Cesium.Cartesian3.fromDegrees(
          item.location.lng,
          item.location.lat
        ),
        billboard: {
          verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
          heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
          pixelOffset: new Cesium.Cartesian2(-18, 0),
          image:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFFUlEQVRYR6VXa4wTVRT+zrQugj+M77gxxp0ZA+7MQHyzGgwmKCRGEESBjeAPMYCBsCQs7sygVGVmUEiEQHzERyImugQEdk2MEBXjGhcjf6AtSuydlZhANGpioiILnWOm3cK0nbbb9f5p995zvvP13O+ec5bQxEq3WZMpgWlgng9QK4DrR9xPA3wKRHs4jwFjyD02WlgajWG2zZzGCVoNxqOjsQfhI8rzNm3IG2hk35BAVjE3M2htBGgQjMMk0WALLhkM94dxroMD7gBhKoCOki2Bt2jC665Hoi6BjGwfAPGDIQADJyQEXZrY9Gk9wKzSMyuAtJWAiQU7poO678ys5VOTQEYxtwO0MnQkoE8T7iON0hk9zyrWfgbmFPd4hy68VXH+sQQyirUEwHuhQ554zpSc199M8JLtUdWcnWDqG/n7SV24Oytxqgj8MHF92/nz+cMAXcvAOkO4m8cSvOSTVqxuAl4B+NdkMjF10omNQ1G8KgJZxdrKQKj4j3Xfnf1/gpd8M7LVD8LDBGzThNtVk0BaXa8QBzkG/mTOT5vsv5yOI5BWrSeIMZvBHQT6F8AXCeYDt/je3jj7Y/KzBlFigIDLmSTVyG0UF19KxCMr28uZ+HUAvbpwF8WBZWTbA3FP3BmDPzGE91Csn2J9CGAhMa3QfOeNWAJpxdpLwFxipDTffaES6OJ9Ft7GsnP5/MEkSWeSxPfmiV4DcB2D5hnC2Vfpm5WtDUxIMbDPEO68+Awo9jEGGxTwY9qQt6cSJKNYoYBuAvMa3fe2Rs+PqvbUBHNYmASNa2nXjqeGy55lmzmfJdpNoLQmnMmxBDKK9RuAqwjBzZrYlIsCpNWe6cTSIYC/1IV3f2yaVet7MCYx6EZDOD+XEVB6VIb0I4DfdeFeXYvAWQAtV55puaz1VOqfpgko5iGApjPTnYbvHIn6n2pNTfhj/PDfYeXWhTuuFoFCiuMAShlg4Ezw1/A1U37ZEoJdWEdaUxMuHX/2a4Bulc6jtf2ke7rsB8j2HUT8HYCfdOG21RLhNwR0MNESI+e8X60B+wjAt8eJtCQyAJ/rwp1RJWDVXkzMOxkYNIR7T41nWFQqMTzNd60qJV+8x/CoF0z9LAVJAs0Co7PwNoge13LO7phX4DLBrCRfVgkLfV+irwD06TWaz1F13Q1JJN9lxgOVQWoFD+0yirUfwBwK+L7onFBVijOyeRhEdzNooSGcXXFqz7anWoLhs4uJ6S4AVzCh/1yeBm4bck7G2acVewGBe8H8re574cxwYcUQ6FkEkj4A4CeT0ozK5hEXoN5esbkFnwGQwUGn7m8KK2JtAuFJqSIyeJchvIXNBi1Tv2L2EmhBZQWMFWFpc6QpHQCgEPMGzfdeHAuJrGw+z0RhSRdM0sxoE6pLoJgFey6BC92NCJaWc71mSGRVy2SGG/rU6g8F7HqgGdleBOJQDyFItyGcLaMhkVbstQQuDjJMnbrvlN17Qw1EDaLjGTO6DN/dVo9EWrZWE6HUqGLHsKYIFK5DNZ8iprfD7xLzM+2+F84MVeu4bK4Iim0ZTLzUyHnvNMpYw/8LSgBZxVzGoOIgQXhaz7kFQqWVUa2lYLxVPOblmvDebBS8oQYqAbKKvZLB20f2L6Q3ek0EWqUJZ8dogjdNIHTIyHYXiF8dCVAa24oiY1qj+07ZoNKIyKivIApUPpoVT8Y6wo+JQBgw+s7HUidKP2jMBArXoVjPhZ+6cF9qlOpa5/8B8lspP6ujZGsAAAAASUVORK5CYII="
        },
        label: {
          heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
          text: item.name,
          style: Cesium.LabelStyle.FILL_AND_OUTLINE,
          font: "35px 楷体",
          fillColor: new Cesium.Color(0, 1, 1, 1),
          outlineColor: Cesium.Color.BLACK,
          outlineWidth: 6,
          scale: 0.5,
          horizontalOrigin: Cesium.HorizontalOrigin.LEFT,
          verticalOrigin: Cesium.VerticalOrigin.BOTTOM
        },
        contextMenus: [
          {
            text: "保存视角",
            keys: "",
            func: () => {
              this.newView(item);
            }
          }
        ]
      });

      viewer.flyTo(this._entity, {
        offset: new Cesium.HeadingPitchRange(0, -1.7, 5000),
        duration: 1
      });
    },
    clear() {
      if (this._entity) {
        let viewer = this.$root.$earth._viewer;
        viewer.entities.remove(this._entity);
        this._entity = undefined;
      }
    }
  }
};
</script>
<style scoped>
.popup {
  width: 270px;
  height: 276px;
  top: 131px;
  left: 568px;
  overflow: auto;
  padding: 10px 10px;
}
.popup ul li {
  list-style: none;
  border-bottom: 1px solid;
}
.popup::-webkit-scrollbar {
  width: 4px;
}
.popup::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.2);
}
.popup::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
}
.xbsj-map {
  text-align: right;
}
.xbsj-weizhi {
  display: inline-block;
}
.xbsj-search-item {
  cursor: pointer;
  padding: 5px 0px;
}
.xbsj-search-item:hover {
  background: rgba(107, 107, 107, 1);
}
</style>

