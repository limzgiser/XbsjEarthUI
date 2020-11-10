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
				thumbnail: '',
			},
			// 另存场景信息
			saveAsSceneParams: {
				name: '',
				summary: '',
				thumbnail: '',
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
		//场景加载
		var labServer = this._root.labServer;
		labServer
			.queryScene(id)
			.then((scene) => {
				//解析场景内容

				//解析场景内容
				var jc = JSON.parse(scene.content);

				this._root.earth.xbsjFromJSON(jc);

				this.sceneName = scene.name;
				this.sceneID = id;
				this.thumbnail = scene.thumbnail;

				this._root.promptInfo('加载场景成功:' + id);
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
			//新建场景
			this.newScene();
		} else {
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
		var params = {
			name: this.saveAsSceneParams.name || '新建场景',
			summary: this.saveAsSceneParams.summary || '场景描述信息',
			config: JSON.stringify(jc),
			thumbnail:
				this.saveAsSceneParams.thumbnail ||
				'data:image/jpeg;base64,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',
		};

		labServer
			.addScene(params)
			.then((id) => {
				this.sceneID = id;
				this._root.promptInfo('创建场景成功:' + id);
			})
			.catch((ex) => {
				console.log('new scene failed ' + ex.message || ex);
				this._root.promptInfo('创建场景失败:' + ex.message || ex, 'error');
			});
	}
	/**
	 * 更新场景
	 */
	updateScene() {
		if (!this.sceneID) return;

		var jc = this._root.earth.toJSON();

	 
		var labServer = this._root.labServer;
		var params = {
			name: this.saveSceneInfo.name || '新建场景',
			summary: this.saveSceneInfo.summary || '场景描述信息',
			config: JSON.stringify(jc),
			thumbnail:
				this.saveSceneInfo.thumbnail ||
				'data:image/jpeg;base64,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',
		};

	 
		labServer
			.updateScene(this.sceneID, params)
			.then((id) => {
				// console.log("update scene success");

				this._root.promptInfo('更新场景成功:' + this.sceneID);
			})
			.catch((ex) => {
				console.log('update scene failed ' + ex.message || ex);
				this._root.promptInfo('更新场景失败:' + ex.message || ex, 'error');
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
		this.saveAsSceneParams.name = info.name;
		this.saveAsSceneParams.summary = info.summary;
		this.saveAsSceneParams.thumbnail = info.thumbnail;
	}
	saveSceneInfo(info) {
		 console.log(info.name)
		this.saveSceneParams.name = info.name;
		this.saveSceneParams.summary = info.summary;
		this.saveSceneParams.thumbnail = info.thumbnail;
	}
}

export default LabScene;
