var serverpath = 'http://cim.cityfun.com.cn/3d_v1/'

var  initTree =  {
    "children": [
        {
            "title": "新建场景",
            "children": [
                {
                
                    "czmObject": {
                        "name": "天地图影像",
                        "xbsjType": "Imagery",
                        "xbsjImageryProvider": {
                            "XbsjImageryProvider": {
                                "url": "//t0.tianditu.com/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=aeda5b9a5f1e1d8264af5eb95b0be4cd",
                                "srcCoordType": "WGS84",
                                "dstCoordType": "WGS84",
                            },
                        }
                    }
                }
            ]
        },
    ]
};

var camera = {
    "position": [120.658, 31.165, 900],
    "pitch": -45.77667031556409,
    "heading": 0,
    "roll": 0.0
};
