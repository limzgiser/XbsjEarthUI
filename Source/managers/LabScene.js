/**
 * 场景打开以及存储类
 * @class
 */
class LabScene {
	constructor(root) {
		this._root = root;

		//响应式变量 sceneID  , sceneName
		XE.MVVM.extend(this, {
			/**
			 * 场景ID  场景保存后才会有值
			 * @type {string}
			 * @default undefined
			 * @instance
			 * @memberof LabScene
			 */
			sceneID: undefined,
			/**
			 * 场景名称
			 * @type {string}
			 * @default '新建场景'
			 * @instance
			 * @memberof LabScene
			 */
			sceneName: '新建场景',
			/**
			 * 场景缩略图地址
			 * @type {string}
			 * @default ''
			 * @instance
			 * @memberof LabScene
			 */
			thumbnail: '',
			/**
			 * 场景描述信息
			 * @type {string}
			 * @default ''
			 * @instance
			 * @memberof LabScene
			 */
			// saveSceneDes: '',
			// saveAsSceneDes: '',
			// saveThumbnail:"",
			// saveAsThumbnail:"",
			// 保存场景信息
			saveSceneParams: {
				name: '',
				summary: '',
			},
			// 另存场景信息
			saveAsSceneParams: {
				name: '',
				summary: '',
			},
		});
		//绑定到vue组件上
		this._comp = root._comp.$refs.mainBarControl.$refs.navigate.$refs.sceneView;

		this.unbinds = [];
		this.unbinds.push(XE.MVVM.bind(this._comp, 'sceneID', this, 'sceneID'));
		this.unbinds.push(XE.MVVM.bind(this._comp, 'sceneName', this, 'sceneName'));
		this.unbinds.push(XE.MVVM.bind(this._comp, 'thumbnail', this, 'thumbnail'));
		this.unbinds.push(XE.MVVM.bind(this._comp, 'saveSceneParams', this, 'saveSceneParams'));
		this.unbinds.push(XE.MVVM.bind(this._comp, 'saveAsSceneParams', this, 'saveAsSceneParams'));

		//更新标题
		this.unbinds.push(
			XE.MVVM.watch(() => {
				document.title = this.sceneName;
			})
		);

		// //更新url参数
		// this.unbinds.push(XE.MVVM.watch(() => {

		//     if (this.sceneID) {

		//         var url  =  "./index.html?scene=" + this.sceneID;

		//         var labServer = this._root.labServer;
		//         if(labServer.server != labServer._defaultServer)
		//         {
		//             url+="&labserver=" + labServer.server;
		//         }

		//         history.pushState(
		//             "cesiumlab",
		//             document.title,
		//             url
		//         );
		//     }

		// }));
	}
	destroy() {
		this._unbinds.forEach((e) => e());
		this._unbinds.length = 0;
	}

	/**
	 * 加载场景
	 * @param {String} id  场景id
	 */
	loadScene(id) {
	 
		if (!id ) {
			let defaultConfig =  {"sceneTree":{"root":{"children":[{"title":"场景树","children":[{"czmObject":{"xbsjType":"Imagery","xbsjGuid":"8098d190-ef3a-4e82-acfc-f086ab1a4235","name":"谷歌影像","xbsjImageryProvider":{"XbsjImageryProvider":{"url":"http://mt1.google.cn/vt/lyrs=s&hl=zh-CN&x={x}&y={y}&z={z}","srcCoordType":"GCJ02"},"UrlTemplateImageryProvider":{},"WebMapTileServiceImageryProvider":{},"createTileMapServiceImageryProvider":{}}}}]}]}},"cameraViewManager":{"globe":{"position":[2.1031217486531677,0.5042461979915104,22191651.019924622],"rotation":[0,-1.5704894508531937,0],"near":0.1,"far":10000000000},"china":{"position":[1.8770894704964525,0.662547523843314,8511735.797037361],"rotation":[0,-1.5701114159178209,0],"near":0.1,"far":10000000000},"lastView":{"position":[2.1031217486531673,0.5041488444338827,20803593.74891228],"rotation":[6.283185307179586,-1.570619506862022,0],"fov":1.0471975511965976,"near":0.1,"far":10000000000}},"cameraFlight":{"xbsjType":"CameraFlight","xbsjGuid":"a408f6d4-cb67-428d-aa90-74e4e422c914","rotateGlobe":{"xbsjType":"RotateGlobe","xbsjGuid":"905158da-8e73-4cc0-beee-59b6c2b3bfb8","latitude":0.6632251157578453},"rotateCenter":{"xbsjType":"RotateCenter","xbsjGuid":"37692788-e601-41ae-be04-b839f61f44df","pitch":-0.5235987755982988},"track":{"xbsjType":"CameraTrack","xbsjGuid":"44b09f85-288b-4a5e-ba16-80d272429013"}},"weather":{"fog":{},"sun":{},"skyBox":{},"moon":{},"rain":{},"snow":{},"cloud":{},"atmosphere":{},"rainPostProcess":{},"snowPostProcess":{},"fogPostProcess":{}},"terrainEffect":{"elevation":{"xbsjType":"ElevationRamp","xbsjGuid":"dc9f7ddb-20e8-4526-adf2-08fa327d04e5"},"slope":{"xbsjType":"SlopeRamp","xbsjGuid":"d63f3f55-645d-440f-9ac9-64896a929d51"},"aspect":{"xbsjType":"AspectRamp","xbsjGuid":"10210d26-3474-4469-a871-26da7ca3b141"},"contour":{},"restrict":{},"globeTranslucency":{}},"postProcess":{"xbsjType":"PostProcess","xbsjGuid":"b6789fe7-13d5-4aa3-ad4d-f7e721818b4d","ambientOcclusion":{"xbsjType":"AmbientOcclusionStage","xbsjGuid":"42424be3-e834-476b-a6f1-06d530e4f23b"},"bloom":{"xbsjType":"BloomStage","xbsjGuid":"85198245-9b29-4592-8048-c778f6224e6b"},"blackAndWhite":{"xbsjType":"BlackAndWhiteStage","xbsjGuid":"cef6a655-a86b-40b6-9141-3020d36154b4"},"brightness":{"xbsjType":"BrightnessStage","xbsjGuid":"aaeba54b-1ae0-43cf-881a-451bf14f9f80"},"depthOfField":{"xbsjType":"DepthOfFieldStage","xbsjGuid":"a1764982-faeb-421f-b5fb-91cba9873bbd"},"lensFlare":{"xbsjType":"LensFlareStage","xbsjGuid":"781a90d4-e172-4dde-8ba0-0cd2e6a6ed84"},"mosaic":{"xbsjType":"MosaicStage","xbsjGuid":"2737df23-6e4a-4fb2-981b-35ccb0cbfdac"},"nightVision":{"xbsjType":"NightVisionStage","xbsjGuid":"85898a21-7bdf-4204-97e1-c07f94b27b43"},"silhouette":{"xbsjType":"XbsSilhouetteStage","xbsjGuid":"81bd8bf7-4723-44bc-879b-b67004066f12"}},"effect":{"xbsjType":"Effect","xbsjGuid":"de2d6b95-3333-420a-bc19-2f2eb4294488","shadow":{"xbsjType":"Shadow","xbsjGuid":"a05a4f9b-e452-4b60-b706-f8d551c199f4"},"forceSunPos":{"position":[2.0245819323134224,0.6981317007977318,10000000]}}};
			this._root.earth.xbsjFromJSON(defaultConfig);
			this.sceneName = '默认场景';
			this.sceneID = '';
			this.thumbnail = '';
			return;
		}
		//场景加载
		var labServer = this._root.labServer;
		labServer
			.queryScene(id)
			.then((scene) => {
				//解析场景内容

				//解析场景内容
				var jc = JSON.parse(scene.config);

		 
				this._root.earth.xbsjFromJSON(jc);

				this.sceneName = scene.name;
			    this.sceneID = id;
				this.thumbnail = scene.thumbnail;

			//	this._root.promptInfo('加载场景成功:' + id);
			})
			.catch((ex) => {
				console.log('query scene failed ' + ex.message || ex);
				console.log(this._root);
				this._root.promptInfo('加载场景失败:' + ex.message || ex, 'error');
			});
	}
	/**
	 * 保存场景
	 */
	saveScene() {
		//如果当前全局内没有场景，那么 向服务器新建场景
	

		if (!this.sceneID) {
			console.log('没有场景id，新建')
			//新建场景
			this.newScene();
		} else {
					console.log('有场景id，修改'+this.sceneID);
			//更新场景
			this.updateScene();
		}
	}
	/**
	 * 新建场景
	 */
	newScene() {
		// console.info(this.sceneName, this.thumbnail,this.sceneID,this.sceneDes);
		// if (this.sceneID) return;

		var jc = this._root.earth.toJSON();
		var labServer = this._root.labServer;
		var self = this;
			 
		this._root.earth.capture(64, 64).then((img) => {
 	var params = {
				name: self.saveAsSceneParams.name || '新建场景',
				summary: self.saveAsSceneParams.summary || '场景描述信息',
				config: JSON.stringify(jc),
				thumbnail: img,
			};
			console.log(params)
			labServer
				.addScene(params)
				.then((id) => {
					// 如果是新建场景，新建成功不保存场景ID
					// 	this.sceneID = id;
					this._root.promptInfo('创建场景成功:' + id);
				})
				.catch((ex) => {
					console.log('new scene failed ' + ex.message || ex);
					this._root.promptInfo('创建场景失败:' + ex.message || ex, 'error');
				});
		});
	}
	/**
	 * 更新场景
	 */
	updateScene() {
		if (!this.sceneID) return;
		var jc = this._root.earth.toJSON();
		var labServer = this._root.labServer;
		var self = this;
      
	 	this._root.earth.capture(64, 64).then((img) => {
	   var params = {
				name: self.saveSceneParams.name || '新建场景',
				summary: self.saveSceneParams.summary || '场景描述信息',
				config: JSON.stringify(jc),
				thumbnail: img,
			};
		 			console.log(params)
			labServer
				.updateScene(this.sceneID, params)
				.then((id) => {
					this._root.promptInfo('更新场景成功:' + this.sceneID);
				})
				.catch((ex) => {
					console.log('update scene failed ' + ex.message || ex);
					this._root.promptInfo('更新场景失败:' + ex.message || ex, 'error');
				});
		});
	}
	/**
	 * 更新缩略图
	 * @param {string} img 需要保存的缩略图地址
	 */
	updateThumbNail(img) {
		//更新场景名称
		if (!this.sceneID) return;

		var labServer = this._root.labServer;
		labServer
			.updateLayerThumbnail('scenes', this.sceneID, img)
			.then((id) => {
				console.log('update scene thumbnail success');

				this.thumbnail = img;
				this._root.promptInfo('更新场景缩略图成功:' + this.sceneID);
			})
			.catch((ex) => {
				console.log('update scene thumbnail failed ' + ex.message || ex);
			});
	}
	/**
	 * 更新场景名称
	 */
	updateName() {
		if (!this.sceneID) return;

		var labServer = this._root.labServer;
		var self = this;
		labServer
			.rename('scenes', this.sceneID, this.sceneName)
			.then((id) => {
				console.log('update scene name success', id);

				this._root.promptInfo('场景改名成功:' + this.sceneID);
			})
			.catch((ex) => {
				console.log('update scene name failed ' + ex.message || ex);
				this._root.promptInfo('场景改名失败:' + ex.message || ex, 'error');
			});
	}
	// 另存场景
	saveAsSceneInfo(info) {
	   console.log(info.name,info.summary)
		this.saveAsSceneParams.name = info.name;
		this.saveAsSceneParams.summary = info.summary;
	}
	saveSceneInfo(info) {
		console.log(info.name,info.summary)
		this.saveSceneParams.name = info.name;
		this.saveSceneParams.summary = info.summary;
	}
}

export default LabScene;
