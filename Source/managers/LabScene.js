/**
 * 场景打开以及存储类
 * @class
 */
import defaultConfig from './defaultSceneConfig'
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
		if (!id) {
			let config =  defaultConfig;
			this._root.earth.xbsjFromJSON(config);
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
			console.log('没有场景id，新建');
			//新建场景
			this.newScene();
		} else {
			console.log('有场景id，修改' + this.sceneID);
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
		console.log(jc.cameraViewManager)
		this._root.earth.capture(64, 64).then((img) => {
			var params = {
				name: self.saveAsSceneParams.name || self.sceneName|| '新建场景',
				summary: self.saveAsSceneParams.summary || '场景描述信息',
				config: JSON.stringify(jc),
				thumbnail: img,
			};
			console.log(params);
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
				name: self.sceneName || self.saveSceneParams.name || '新建场景',
				summary: self.saveSceneParams.summary || '场景描述信息',
				config: JSON.stringify(jc),
				thumbnail: img,
			};

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
		console.log(info.name, info.summary);
		this.saveAsSceneParams.name = info.name;
		this.saveAsSceneParams.summary = info.summary;
	}
	saveSceneInfo(info) {
		console.log(info.name, info.summary);
		this.saveSceneParams.name = info.name;
		this.saveSceneParams.summary = info.summary;
	}
}

export default LabScene;
