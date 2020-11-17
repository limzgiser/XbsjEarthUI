export default {
	navigate: {
		name: '漫游',
		scene: {
			label: '场景',
			save: '保存',
			// saveAsscene: '另存为',
			openScene: '打开',
		},
		view: {
			label: '视角',
			view: '视角',
			global: '全球',
			china: '中国',
			 
			custom: '自定义',
		},
		location: {
			label: '搜索定位',
			location: '搜索定位',
		},
		autofly: {
			label: '自动飞行',
			globalrotation: '全球旋转',
			centerrotation: '中心旋转',
			cameraattach: '绑定相机',
		},
		interactivemode: {
			// label: '交互模式',
			default: '默认',
			gooleearth: '右键旋转',
			// firstperson: '第一人称',
			mouseshiqu: '鼠标拾取',
			// VR: 'VR',
		},
	},
	view: {
		name: '视图',
		control: {
			label: '控件',
			layer: '图层管理',
			navcontrol: '导航控件',
			scalecontrol: '比例尺',
			statecontrol: '状态栏',
			// timelinecontrol: '时间线',
			// modelTree: '模型结构',
			// autoTest: '瓦片测试',
		},
		splitscreen: {
			label: '分屏',
			singleviewport: '单视口',
		},
		// debug: {
		// 	label: '调试',
		// 	terraindebug: '地形调试',
		// 	dtilesdebug: '瓦片调试',
		// 	capture: '场景截图',
		// 	earthColor: '地球颜色',
		// },
	},
	// imagery: {
	// 	name: '影像',
	// 	source: {
	// 		label: '数据源',
	// 		online: '在线',
	// 		wms: 'WMTS',
	// 		history: '历史影像',
	// 	},
	// 	visible: {
	// 		label: '可视化',
	// 		viewport: '视口',
	// 		transpare: '透明度',
	// 		contrast: '对比度',
	// 		light: '亮度',
	// 		hue: '色相',
	// 		saturate: '饱和度',
	// 		gamma: 'gamma',
	// 	},
	// },

	model: {
		name: '瓦片',
		source: {
			label: '数据源',
			online: '在线',
		},
		edit: {
			fenleimmodel: '分类瓦片',
			fenleiterrain: '分类地形',
			style: '样式',
			move: '移动',
			rotate: '旋转',
			view: '视口',
			techonlogy: '科技感',
			SkipLOD: 'SkipLOD',
			debugShowBoundingVolume: '调试包围盒',
		},
		visible: {
			label: '可视化',
			accuracy: '显示精度',
			material: '材质底色',
			scatter: '散射强度',
			maximumMemoryUsage: '最大内存',
		},
	},

	// terrain: {
	// 	name: ' 地形',
	// 	online: {
	// 		online: '在线',
	// 	},
	// 	color: {
	// 		label: '着色',
	// 		elevationcolor: '高程',
	// 		slope: '坡度',
	// 		slopeaspect: '坡向',
	// 		contour: '等高线',
	// 	},
	// 	effect: {
	// 		tailoring: '地形裁剪',
	// 		show: '显示地球',
	// 		enableLighting: '地形光照',
	// 		depth: '深度检测',
	// 		logarithmic: '对数深度',
	// 		subSurface: '地下模式',
	// 		wireFrame: '三角网',
	// 		transparent: '地表不透明',
	// 		globeTranslucency: '地表透明',
	// 	},
	// },

	analysis: {
		name: ' 分析',
		visualization: {
			// label: '可视化',
			// flatten: '压平',
			// videofusion: '视频融合',
			// sectioning: '剖切',
			visual: '可视阈',
			// water: '水面',
			// expansion: '模型展开',
			// cutsurface: '挖坑',
		},
		measure: {
			label: '测量',
			// point: '点位',
			distance: '距离',
			disGroud: '贴地距离',
			height: '高度',
			area: '面积',
			// sectionPlane: '剖面',
			// areaGroud: '立面面积',
			// angle: '方位角',
			intervisible: '通视',
			circleIntervisible: '圆形通视',
			// volume: '体积',
			reset: '清除',
		},
	},

	// effect: {
	// 	name: ' 效果',
	// 	weather: {
	// 		sun: '太阳',
	// 		moon: '月亮',
	// 		atmosphere: '大气',
	// 		cloud: '云',
	// 		rain: '雨',
	// 		snow: '雪',
	// 		fog: '雾',
	// 		fogpostprocess: '全屏雾效',
	// 		starrysky: '星空',
	// 		skyBoxOnGround: '天空盒',
	// 	},
	// 	effect: {
	// 		shadow: '阴影',
	// 		bloom: '泛光',
	// 		ambientOcclusion: '环境遮蔽',
	// 		depthOfField: '景深',
	// 		silhouette: '轮廓',

	// 		brightness: '亮度',
	// 		blackAndWhite: '黑白',
	// 		nightVision: '夜视',
	// 		lensFlare: '镜头耀斑',
	// 		mosaic: '马赛克',

	// 		forceSunPos: '强制光照',
	// 	},
	// },

	// entity: {
	// 	name: '标会',
	// 	plotlibrary: {
	// 		label: '标绘库',
	// 		online: '在线',
	// 	},
	// 	routine: {
	// 		label: '常规',
	// 		pin: '图标点',
	// 		line: '折线',
	// 		rectangle: '矩形',
	// 		circle: '圆',
	// 		doublearrow: '双箭头',
	// 		face: '多边形',
	// 		haplochromatization: '单体化',
	// 		flatarrow: '平尾箭头',
	// 		particlesystem: '粒子',
	// 		ParticleSystemFireWork: '粒子烟火',
	// 		ParticleSystemTails: '粒子喷射',
	// 		GeoSmoothPolygon: '平滑多边形',
	// 	},
	// 	cube: {
	// 		label: '立方体',
	// 		model: '模型',
	// 		polygonImage: '立面贴图',
	// 	},
	// 	senior: {
	// 		label: '高级',
	// 		path: '路径动画',
	// 		CustomGroundRectangle: '贴地图元',
	// 		road: '道路',
	// 		wall: '挡土墙',

	// 		surface: '填充面',
	// 		groundimage: '贴地图像',
	// 	},
	// 	algorithm: {
	// 		label: '算法',
	// 		parabolic: '抛物插值',
	// 		odLine: 'OD线',
	// 	},
	// },

	// other: {
	// 	name: '其他',
	// 	dataSource: {
	// 		label: '数据源',
	// 		GeoJSON: 'GeoJSON',
	// 		KML: 'KML',
	// 		Czml: 'Czml',
	// 	},
	// },
};
