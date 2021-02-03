
var serverpath = 'http://cim.cityfun.com.cn/3d_v1/'

// 地块info
var lanInfo  = "http://192.168.2.45/geocms/v1/cf/rest/services/DataService/DB/db9a696e-33f7-4fd7-8271-8a591ee794c6/info";
var landDefail = 'http://192.168.2.45/geocms/v1/cf/rest/services/DataService/DB/db9a696e-33f7-4fd7-8271-8a591ee794c6';
var houseInfo = 'http://192.168.2.45/geocms/v1/cf/rest/services/DataService/DB/62951a24-f2b7-4463-87a9-c224ce7abb4c/info';
var houseDefail = 'http://192.168.2.45/geocms/v1/cf/rest/services/DataService/DB/62951a24-f2b7-4463-87a9-c224ce7abb4c';
var login = "http://app.cityfun.com.cn/geocms/api/admin/auth/Login"


var token = 'Dja6DgrdjgWBL0bDNvaeo6pLSEZRARk1KKZpJrgQ%2FjA90IOuzETodGPYLurcXH9mPLQdLc919cK2%2BGBQtr1lP9fQY%2FM0uv7x2UdkVRD2zUPqLd4eWoGztA%3D%3D'
var  initTree =  {
    "children": [
        {
            "title": "新建场景",
            "children": [
                {
                    "czmObject": {
                        "name": "苏州大市影像",
                        "xbsjType": "Imagery",
                        "xbsjImageryProvider": {
                            "XbsjImageryProvider": {},
                            "UrlTemplateImageryProvider": {},
                            "WebMapTileServiceImageryProvider": {
                                "url": "http://map.cityfun.com.cn/arcgis/rest/services/SZ/SZ_IMAGE_2020_3857/MapServer/WMTS/tile/1.0.0/SZ_SZ_IMAGE_2020_3857/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
                                "layer": "SZ_SZ_IMAGE_2020_3857",
                                "style": "default",
                                "tileMatrixSetID": "default028mm",
                                "tileMatrixLabels": [
                                    "0",
                                    "1",
                                    "2",
                                    "3",
                                    "4",
                                    "5",
                                    "6",
                                    "7",
                                    "8",
                                    "9",
                                    "10",
                                    "11",
                                    "12",
                                    "13",
                                    "14",
                                    "15",
                                    "16",
                                    "17",
                                    "18",
                                    "19"
                                ],
                                "maximumLevel": 19
                            },
                            "createTileMapServiceImageryProvider": {},
                            "type": "WebMapTileServiceImageryProvider"
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
