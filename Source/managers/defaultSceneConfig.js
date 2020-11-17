export default {
	sceneTree: {
		root: {
			children: [
				{
					title: '场景树',
					children: [
						{
							czmObject: {
								xbsjType: 'Imagery',
								xbsjGuid: '8098d190-ef3a-4e82-acfc-f086ab1a4235',
								name: '谷歌影像',
								xbsjImageryProvider: {
									XbsjImageryProvider: {
										url: '//mt1.google.cn/vt/lyrs=s,h&gl=cn&x={x}&y={y}&z={z}&s=Gali',
										srcCoordType: 'GCJ02',
									},
									UrlTemplateImageryProvider: {},
									WebMapTileServiceImageryProvider: {},
									createTileMapServiceImageryProvider: {},
								},
							},
						},
					],
				},
			],
		},
	},
	cameraViewManager: {
		globe: {
			position: [2.1074792836098357, 0.5522879977522437, 900.110735832548],
			rotation: [0, -1.5704894508531937, 0],
			near: 0.1,
			far: 10000000000,
		},
		china: {
			position: [1.8770894704964525, 0.662547523843314, 8511735.797037361],
			rotation: [0, -1.5701114159178209, 0],
			near: 0.1,
			far: 10000000000,
		},
		// changshu: {
		// 	position: [2.1077733845178135, 0.5527001037711997, 818.0778478090306],
		// 	rotation: [0.2913410670658507, -0.7989536176065442, 1.5987211554602254e-14],
		// 	near: 0.1,
		// 	far: 10000000000,
		// },
		lastView: {
			position: [2.1031217486531673, 0.5041488444338827, 20803593.74891228],
			rotation: [6.283185307179586, -1.570619506862022, 0],
			fov: 1.0471975511965976,
			near: 0.1,
			far: 10000000000,
		},
	},
	cameraFlight: {
		xbsjType: 'CameraFlight',
		xbsjGuid: 'a408f6d4-cb67-428d-aa90-74e4e422c914',
		rotateGlobe: {
			xbsjType: 'RotateGlobe',
			xbsjGuid: '905158da-8e73-4cc0-beee-59b6c2b3bfb8',
			latitude: 0.6632251157578453,
		},
		rotateCenter: {
			xbsjType: 'RotateCenter',
			xbsjGuid: '37692788-e601-41ae-be04-b839f61f44df',
			pitch: -0.5235987755982988,
		},
		track: { xbsjType: 'CameraTrack', xbsjGuid: '44b09f85-288b-4a5e-ba16-80d272429013' },
	},
	weather: {
		fog: {},
		sun: {},
		skyBox: {},
		moon: {},
		rain: {},
		snow: {},
		cloud: {},
		atmosphere: {},
		rainPostProcess: {},
		snowPostProcess: {},
		fogPostProcess: {},
	},
	terrainEffect: {
		elevation: { xbsjType: 'ElevationRamp', xbsjGuid: 'dc9f7ddb-20e8-4526-adf2-08fa327d04e5' },
		slope: { xbsjType: 'SlopeRamp', xbsjGuid: 'd63f3f55-645d-440f-9ac9-64896a929d51' },
		aspect: { xbsjType: 'AspectRamp', xbsjGuid: '10210d26-3474-4469-a871-26da7ca3b141' },
		contour: {},
		restrict: {},
		globeTranslucency: {},
	},
	postProcess: {
		xbsjType: 'PostProcess',
		xbsjGuid: 'b6789fe7-13d5-4aa3-ad4d-f7e721818b4d',
		ambientOcclusion: {
			xbsjType: 'AmbientOcclusionStage',
			xbsjGuid: '42424be3-e834-476b-a6f1-06d530e4f23b',
		},
		bloom: { xbsjType: 'BloomStage', xbsjGuid: '85198245-9b29-4592-8048-c778f6224e6b' },
		blackAndWhite: { xbsjType: 'BlackAndWhiteStage', xbsjGuid: 'cef6a655-a86b-40b6-9141-3020d36154b4' },
		brightness: { xbsjType: 'BrightnessStage', xbsjGuid: 'aaeba54b-1ae0-43cf-881a-451bf14f9f80' },
		depthOfField: { xbsjType: 'DepthOfFieldStage', xbsjGuid: 'a1764982-faeb-421f-b5fb-91cba9873bbd' },
		lensFlare: { xbsjType: 'LensFlareStage', xbsjGuid: '781a90d4-e172-4dde-8ba0-0cd2e6a6ed84' },
		mosaic: { xbsjType: 'MosaicStage', xbsjGuid: '2737df23-6e4a-4fb2-981b-35ccb0cbfdac' },
		nightVision: { xbsjType: 'NightVisionStage', xbsjGuid: '85898a21-7bdf-4204-97e1-c07f94b27b43' },
		silhouette: { xbsjType: 'XbsSilhouetteStage', xbsjGuid: '81bd8bf7-4723-44bc-879b-b67004066f12' },
	},
	effect: {
		xbsjType: 'Effect',
		xbsjGuid: 'de2d6b95-3333-420a-bc19-2f2eb4294488',
		shadow: { xbsjType: 'Shadow', xbsjGuid: 'a05a4f9b-e452-4b60-b706-f8d551c199f4' },
		forceSunPos: { position: [2.0245819323134224, 0.6981317007977318, 10000000] },
	},
};
