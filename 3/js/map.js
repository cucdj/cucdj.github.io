/**
 * Created by sunqi on 15-1-17.
 */

var dark = {
        // 鍏ㄥ浘榛樿鑳屾櫙
        backgroundColor: 'transparent',

        // 榛樿鑹叉澘
        color: [
            '#FE8463','#9BCA63','#FAD860','#60C0DD','#0084C6',
            '#D7504B','#C6E579','#26C0C0','#F0805A','#F4E001',
            '#B5C334'
        ],

        // 鍥捐〃鏍囬
        title: {
            textStyle: {
                fontWeight: 'normal',
                color: '#fff'          // 涓绘爣棰樻枃瀛楅鑹�
            }
        },

        // 鍥句緥
        legend: {
            textStyle: {
                color: '#ccc'          // 鍥句緥鏂囧瓧棰滆壊
            }
        },

        // 鍊煎煙
        dataRange: {
            itemWidth: 15,
            color: ['#FFF808','#21BCF9'],
            textStyle: {
                color: '#ccc'          // 鍊煎煙鏂囧瓧棰滆壊
            }
        },

        toolbox: {
            color : ['#fff', '#fff', '#fff', '#fff'],
            effectiveColor : '#FE8463',
            disableColor: '#666'
        },

        // 鎻愮ず妗�
        tooltip: {
            backgroundColor: 'rgba(250,250,250,0.8)',     // 鎻愮ず鑳屾櫙棰滆壊锛岄粯璁や负閫忔槑搴︿负0.7鐨勯粦鑹�
            axisPointer : {            // 鍧愭爣杞存寚绀哄櫒锛屽潗鏍囪酱瑙﹀彂鏈夋晥
                type : 'line',         // 榛樿涓虹洿绾匡紝鍙€変负锛�'line' | 'shadow'
                lineStyle : {          // 鐩寸嚎鎸囩ず鍣ㄦ牱寮忚缃�
                    color: '#aaa'
                },
                crossStyle: {
                    color: '#aaa'
                },
                shadowStyle : {                     // 闃村奖鎸囩ず鍣ㄦ牱寮忚缃�
                    color: 'rgba(200,200,200,0.2)'
                }
            },
            textStyle: {
                color: '#333'
            }
        },

        // 鍖哄煙缂╂斁鎺у埗鍣�
        dataZoom: {
            dataBackgroundColor: '#555',            // 鏁版嵁鑳屾櫙棰滆壊
            fillerColor: 'rgba(200,200,200,0.2)',   // 濉厖棰滆壊
            handleColor: '#eee'     // 鎵嬫焺棰滆壊
        },

        // 缃戞牸
        grid: {
            borderWidth: 0
        },

        // 绫荤洰杞�
        categoryAxis: {
            axisLine: {            // 鍧愭爣杞寸嚎
                show: false
            },
            axisTick: {            // 鍧愭爣杞村皬鏍囪
                show: false
            },
            axisLabel: {           // 鍧愭爣杞存枃鏈爣绛撅紝璇﹁axis.axisLabel
                textStyle: {       // 鍏朵綑灞炴€ч粯璁や娇鐢ㄥ叏灞€鏂囨湰鏍峰紡锛岃瑙乀EXTSTYLE
                    color: '#ccc'
                }
            },
            splitLine: {           // 鍒嗛殧绾�
                show: false
            }
        },

        // 鏁板€煎瀷鍧愭爣杞撮粯璁ゅ弬鏁�
        valueAxis: {
            axisLine: {            // 鍧愭爣杞寸嚎
                show: false
            },
            axisTick: {            // 鍧愭爣杞村皬鏍囪
                show: false
            },
            axisLabel: {           // 鍧愭爣杞存枃鏈爣绛撅紝璇﹁axis.axisLabel
                textStyle: {       // 鍏朵綑灞炴€ч粯璁や娇鐢ㄥ叏灞€鏂囨湰鏍峰紡锛岃瑙乀EXTSTYLE
                    color: '#ccc'
                }
            },
            splitLine: {           // 鍒嗛殧绾�
                lineStyle: {       // 灞炴€ineStyle锛堣瑙乴ineStyle锛夋帶鍒剁嚎鏉℃牱寮�
                    color: ['#aaa'],
                    type: 'dashed'
                }
            },
            splitArea: {           // 鍒嗛殧鍖哄煙
                show: false
            }
        },

        polar : {
            name : {
                textStyle: {       // 鍏朵綑灞炴€ч粯璁や娇鐢ㄥ叏灞€鏂囨湰鏍峰紡锛岃瑙乀EXTSTYLE
                    color: '#ccc'
                }
            },
            axisLine: {            // 鍧愭爣杞寸嚎
                lineStyle: {       // 灞炴€ineStyle鎺у埗绾挎潯鏍峰紡
                    color: '#ddd'
                }
            },
            splitArea : {
                show : true,
                areaStyle : {
                    color: ['rgba(250,250,250,0.2)','rgba(200,200,200,0.2)']
                }
            },
            splitLine : {
                lineStyle : {
                    color : '#ddd'
                }
            }
        },

        timeline : {
            label: {
                textStyle:{
                    color: '#ccc'
                }
            },
            lineStyle : {
                color : '#aaa'
            },
            controlStyle : {
                normal : { color : '#fff'},
                emphasis : { color : '#FE8463'}
            },
            symbolSize : 3
        },

        // 鎶樼嚎鍥鹃粯璁ゅ弬鏁�
        line: {
            smooth : true
        },

        // K绾垮浘榛樿鍙傛暟
        k: {
            itemStyle: {
                normal: {
                    color: '#FE8463',       // 闃崇嚎濉厖棰滆壊
                    color0: '#9BCA63',      // 闃寸嚎濉厖棰滆壊
                    lineStyle: {
                        width: 1,
                        color: '#FE8463',   // 闃崇嚎杈规棰滆壊
                        color0: '#9BCA63'   // 闃寸嚎杈规棰滆壊
                    }
                }
            }
        },

        // 闆疯揪鍥鹃粯璁ゅ弬鏁�
        radar : {
            symbol: 'emptyCircle',    // 鍥惧舰绫诲瀷
            symbolSize:3
            //symbol: null,         // 鎷愮偣鍥惧舰绫诲瀷
            //symbolRotate : null,  // 鍥惧舰鏃嬭浆鎺у埗
        },

        pie: {
            itemStyle: {
                normal: {
                    borderWidth: 1,
                    borderColor : 'rgba(255, 255, 255, 0.5)'
                },
                emphasis: {
                    borderWidth: 1,
                    borderColor : 'rgba(255, 255, 255, 1)'
                }
            }
        },

        map: {
            itemStyle: {
                normal: {
                    borderColor:'rgba(255, 255, 255, 0.5)',
                    areaStyle: {
                        color: '#ddd'
                    },
                    label: {
                        textStyle: {
                            color: '#ccc'
                        }
                    }
                },
                emphasis: {                 // 涔熸槸閫変腑鏍峰紡
                    areaStyle: {
                        color: '#FE8463'
                    },
                    label: {
                        textStyle: {
                            color: 'ccc'
                        }
                    }
                }
            }
        },

        force : {
            itemStyle: {
                normal: {
                    linkStyle : {
                        color : '#fff'
                    }
                }
            }
        },

        chord : {
            itemStyle : {
                normal : {
                    borderWidth: 1,
                    borderColor: 'rgba(228, 228, 228, 0.2)',
                    chordStyle : {
                        lineStyle : {
                            color : 'rgba(228, 228, 228, 0.2)'
                        }
                    }
                },
                emphasis : {
                    borderWidth: 1,
                    borderColor: 'rgba(228, 228, 228, 0.9)',
                    chordStyle : {
                        lineStyle : {
                            color : 'rgba(228, 228, 228, 0.9)'
                        }
                    }
                }
            }
        },

        gauge : {
            axisLine: {            // 鍧愭爣杞寸嚎
                show: true,        // 榛樿鏄剧ず锛屽睘鎬how鎺у埗鏄剧ず涓庡惁
                lineStyle: {       // 灞炴€ineStyle鎺у埗绾挎潯鏍峰紡
                    color: [[0.2, '#9BCA63'],[0.8, '#60C0DD'],[1, '#D7504B']],
                    width: 3,
                    shadowColor : '#fff', //榛樿閫忔槑
                    shadowBlur: 10
                }
            },
            axisTick: {            // 鍧愭爣杞村皬鏍囪
                length :15,        // 灞炴€ength鎺у埗绾块暱
                lineStyle: {       // 灞炴€ineStyle鎺у埗绾挎潯鏍峰紡
                    color: 'auto',
                    shadowColor : '#fff', //榛樿閫忔槑
                    shadowBlur: 10
                }
            },
            axisLabel: {            // 鍧愭爣杞村皬鏍囪
                textStyle: {       // 灞炴€ineStyle鎺у埗绾挎潯鏍峰紡
                    fontWeight: 'bolder',
                    color: '#fff',
                    shadowColor : '#fff', //榛樿閫忔槑
                    shadowBlur: 10
                }
            },
            splitLine: {           // 鍒嗛殧绾�
                length :25,         // 灞炴€ength鎺у埗绾块暱
                lineStyle: {       // 灞炴€ineStyle锛堣瑙乴ineStyle锛夋帶鍒剁嚎鏉℃牱寮�
                    width:3,
                    color: '#fff',
                    shadowColor : '#fff', //榛樿閫忔槑
                    shadowBlur: 10
                }
            },
            pointer: {           // 鍒嗛殧绾�
                shadowColor : '#fff', //榛樿閫忔槑
                shadowBlur: 5
            },
            title : {
                textStyle: {       // 鍏朵綑灞炴€ч粯璁や娇鐢ㄥ叏灞€鏂囨湰鏍峰紡锛岃瑙乀EXTSTYLE
                    fontWeight: 'bolder',
                    fontSize: 20,
                    fontStyle: 'italic',
                    color: '#fff',
                    shadowColor : '#fff', //榛樿閫忔槑
                    shadowBlur: 10
                }
            },
            detail : {
                shadowColor : '#fff', //榛樿閫忔槑
                shadowBlur: 5,
                offsetCenter: [0, '50%'],       // x, y锛屽崟浣峱x
                textStyle: {       // 鍏朵綑灞炴€ч粯璁や娇鐢ㄥ叏灞€鏂囨湰鏍峰紡锛岃瑙乀EXTSTYLE
                    fontWeight: 'bolder',
                    color: '#fff'
                }
            }
        },

        funnel : {
            itemStyle: {
                normal: {
                    borderColor : 'rgba(255, 255, 255, 0.5)',
                    borderWidth: 1
                },
                emphasis: {
                    borderColor : 'rgba(255, 255, 255, 1)',
                    borderWidth: 1
                }
            }
        },

        textStyle: {
            fontFamily: '寰蒋闆呴粦, Arial, Verdana, sans-serif'
        }
    };

var barArray=[34,70,2,2,3,5,4,10,21,27,23,12,34,165,35,46,80,60,67,67,88,65,44,44,43];
//var ecConfig = require('echarts/config');

var mapData5 = {
    title : {
        text: '各省高官查处数',
        subtext: '2012.12-2014.12',
        x:'center',
        show:false
    },
    tooltip : {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        x:'left',
        data:['iphone3','iphone4','iphone5'],
        show:false
    },
    dataRange: {
        min:3,
        max: 50,
        x: 'left',
        y: 'bottom',
        text:['高危','低发'],           // 文本，默认为数值文本
        calculable : true
    },
    toolbox: {
        show: false,
        orient : 'vertical',
        x: 'right',
        y: 'center',
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },

    series : [
        {
            name: '查处数',
            type: 'map',
            mapType: 'china',
            roam: false,
            itemStyle:{
                normal:{label:{show:false}},
                emphasis:{label:{show:false}}
            },
            data:[
                {name:"安徽",value:31},
                {name:"北京",value:6,selected:true},
                {name:"重庆",value:12,selected:false},
                {name:"福建",value:35},
                {name:"甘肃",value:11,selected:false},
                {name:"广东",value:56},
                {name:"广西",value:19,selected:false},
                {name:"贵州",value:30},
                {name:"海南",value:22},
                {name:"河北",value:19,selected:false},
                {name:"河南",value:34},
                {name:"黑龙江",value:26},
                {name:"湖北",value:64},
                {name:"湖南",value:29},
                {name:"吉林",value:12,selected:false},
                {name:"江苏",value:21},
                {name:"江西",value:29},
                {name:"辽宁",value:21},
                {name:"内蒙古",value:16,selected:false},
                {name:"宁夏",value:12,selected:false},
                {name:"青海",value:9,selected:true},
                {name:"山东",value:38},
                {name:"山西",value:48},
                {name:"陕西",value:28},
                {name:"上海",value:9,selected:true},
                {name:"四川",value:60},
                {name:"天津",value:5,selected:true},
                {name:"西藏",value:4,selected:true},
                {name:"新疆",value:14,selected:false},
                {name:"云南",value:16,selected:false},
                {name:"浙江",value:10,selected:false}

            ]
        }
    ]
};
var mapData4 = {
    title : {
        text: '各省高官查处数',
        subtext: '2012.12-2014.12',
        x:'center',
        show:false
    },
    tooltip : {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        x:'left',
        data:['iphone3','iphone4','iphone5'],
        show:false
    },
    dataRange: {
        min:3,
        max: 50,
        x: 'left',
        y: 'bottom',
        text:['高危','低发'],           // 文本，默认为数值文本
        calculable : true
    },
    toolbox: {
        show: false,
        orient : 'vertical',
        x: 'right',
        y: 'center',
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },

    series : [
        {
            name: '查处数',
            type: 'map',
            mapType: 'china',
            roam: false,
            itemStyle:{
                normal:{label:{show:false}},
                emphasis:{label:{show:false}}
            },
            data:[
                {name:"安徽",value:31,selected:false},
                {name:"北京",value:6},
                {name:"重庆",value:12,selected:true},
                {name:"福建",value:35,selected:false},
                {name:"甘肃",value:11,selected:true},
                {name:"广东",value:56},
                {name:"广西",value:19,selected:true},
                {name:"贵州",value:30,selected:false},
                {name:"海南",value:22,selected:false},
                {name:"河北",value:19,selected:true},
                {name:"河南",value:34,selected:false},
                {name:"黑龙江",value:26,selected:false},
                {name:"湖北",value:64},
                {name:"湖南",value:29,selected:false},
                {name:"吉林",value:12,selected:true},
                {name:"江苏",value:21,selected:false},
                {name:"江西",value:29,selected:false},
                {name:"辽宁",value:21,selected:false},
                {name:"内蒙古",value:16,selected:true},
                {name:"宁夏",value:12,selected:true},
                {name:"青海",value:9},
                {name:"山东",value:38,selected:false},
                {name:"山西",value:48},
                {name:"陕西",value:28,selected:false},
                {name:"上海",value:9},
                {name:"四川",value:60},
                {name:"天津",value:5},
                {name:"西藏",value:4},
                {name:"新疆",value:14,selected:true},
                {name:"云南",value:16,selected:true},
                {name:"浙江",value:10,selected:true}

            ]
        }
    ]
};
var mapData3 = {
    title : {
        text: '各省高官查处数',
        subtext: '2012.12-2014.12',
        x:'center',
        show:false
    },
    tooltip : {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        x:'left',
        data:['iphone3','iphone4','iphone5'],
        show:false
    },
    dataRange: {
        min:3,
        max: 50,
        x: 'left',
        y: 'bottom',
        text:['高危','低发'],           // 文本，默认为数值文本
        calculable : true
    },
    toolbox: {
        show: false,
        orient : 'vertical',
        x: 'right',
        y: 'center',
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },

    series : [
        {
            name: '查处数',
            type: 'map',
            mapType: 'china',
            roam: false,
            itemStyle:{
                normal:{label:{show:false}},
                emphasis:{label:{show:false}}
            },
            data:[
                {name:"安徽",value:31,selected:true},
                {name:"北京",value:6},
                {name:"重庆",value:12},
                {name:"福建",value:35,selected:true},
                {name:"甘肃",value:11},
                {name:"广东",value:56,selected:false},
                {name:"广西",value:19},
                {name:"贵州",value:30,selected:true},
                {name:"海南",value:22,selected:true},
                {name:"河北",value:19},
                {name:"河南",value:34,selected:true},
                {name:"黑龙江",value:26,selected:true},
                {name:"湖北",value:64,selected:false},
                {name:"湖南",value:29,selected:true},
                {name:"吉林",value:12},
                {name:"江苏",value:21,selected:true},
                {name:"江西",value:29,selected:true},
                {name:"辽宁",value:21,selected:true},
                {name:"内蒙古",value:16},
                {name:"宁夏",value:12},
                {name:"青海",value:9},
                {name:"山东",value:38,selected:true},
                {name:"山西",value:48,selected:false},
                {name:"陕西",value:28,selected:true},
                {name:"上海",value:9},
                {name:"四川",value:60,selected:false},
                {name:"天津",value:5},
                {name:"西藏",value:4},
                {name:"新疆",value:14},
                {name:"云南",value:16},
                {name:"浙江",value:10}
            ]
        }
    ]
};
var mapData2 = {
    title : {
        text: '各省高官查处数',
        subtext: '2012.12-2014.12',
        x:'center',
        show:false
    },
    tooltip : {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        x:'left',
        data:['iphone3','iphone4','iphone5'],
        show:false
    },
    dataRange: {
        min:3,
        max: 50,
        x: 'left',
        y: 'bottom',
        text:['高危','低发'],           // 文本，默认为数值文本
        calculable : true
    },
    toolbox: {
        show: false,
        orient : 'vertical',
        x: 'right',
        y: 'center',
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },

    series : [
        {
            name: '查处数',
            type: 'map',
            mapType: 'china',
            roam: false,
            itemStyle:{
                normal:{label:{show:false}},
                emphasis:{label:{show:false}}
            },
            data:[
                {name:"安徽",value:31},
                {name:"北京",value:6},
                {name:"重庆",value:12},
                {name:"福建",value:35},
                {name:"甘肃",value:11},
                {name:"广东",value:56,selected:true},
                {name:"广西",value:19},
                {name:"贵州",value:30},
                {name:"海南",value:22},
                {name:"河北",value:19},
                {name:"河南",value:34},
                {name:"黑龙江",value:26},
                {name:"湖北",value:64,selected:true},
                {name:"湖南",value:29},
                {name:"吉林",value:12},
                {name:"江苏",value:21},
                {name:"江西",value:29},
                {name:"辽宁",value:21},
                {name:"内蒙古",value:16},
                {name:"宁夏",value:12},
                {name:"青海",value:9},
                {name:"山东",value:38},
                {name:"山西",value:48,selected:true},
                {name:"陕西",value:28},
                {name:"上海",value:9},
                {name:"四川",value:60,selected:true},
                {name:"天津",value:5},
                {name:"西藏",value:4},
                {name:"新疆",value:14},
                {name:"云南",value:16},
                {name:"浙江",value:10}
            ]
        }
    ]
};
var mapData1 = {
    title : {
        text: '各省高官查处数',
        subtext: '2012.12-2014.12',
        x:'center',
        show:false
    },
    tooltip : {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        x:'left',
        data:['iphone3','iphone4','iphone5'],
        show:false
    },
    dataRange: {
        min:3,
        max: 50,
        x: 'left',
        y: 'bottom',
        text:['高危','低发'],           // 文本，默认为数值文本
        calculable : true
    },
    toolbox: {
        show: false,
        orient : 'vertical',
        x: 'right',
        y: 'center',
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },

    series : [
        {
            name: '查处数',
            type: 'map',
            mapType: 'china',
            roam: false,
            itemStyle:{
                normal:{label:{show:false}},
                emphasis:{label:{show:false}}
            },
            data:[
                {name:"安徽",value:31},
                {name:"北京",value:6,selected:false},
                {name:"重庆",value:12},
                {name:"福建",value:35},
                {name:"甘肃",value:11},
                {name:"广东",value:56},
                {name:"广西",value:19},
                {name:"贵州",value:30},
                {name:"海南",value:22},
                {name:"河北",value:19},
                {name:"河南",value:34},
                {name:"黑龙江",value:26},
                {name:"湖北",value:64},
                {name:"湖南",value:29},
                {name:"吉林",value:12},
                {name:"江苏",value:21},
                {name:"江西",value:29},
                {name:"辽宁",value:21},
                {name:"内蒙古",value:16},
                {name:"宁夏",value:12},
                {name:"青海",value:9,selected:false},
                {name:"山东",value:38},
                {name:"山西",value:48},
                {name:"陕西",value:28},
                {name:"上海",value:9,selected:false},
                {name:"四川",value:60},
                {name:"天津",value:5,selected:false},
                {name:"西藏",value:4,selected:false},
                {name:"新疆",value:14},
                {name:"云南",value:16},
                {name:"浙江",value:10}

            ]
        }
    ]
};

var barData1 = {

    title : {
        text: '单月官员落马数',
        subtext: '2012.12-2014.12',
        show:false

    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['查处人数'],
        show:false
    },
    toolbox: {
        show :false,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    yAxis : [
        {
            type : 'value',
            boundaryGap : [0, 0.01],
            show:false
        }
    ],
    xAxis : [{
        show:false,
        'type':'category',
        'axisLabel':{'interval':0},
        data : ["\n2012-12","2013-1","\n2013-2","2013-3","\n2013-4","2013-5","\n2013-6","2013-7","\n2013-8","2013-9","\n2013-10","2013-11","\n2013-12","2014-1","\n2014-2","2014-3","\n2014-4","2014-5","\n2014-6","2014-7","\n2014-8","2014-9","\n2014-10","2014-11","\n2014-12"]
    }],
    series :[
        {
            name:'2012.12-2014.12',
            type:'line',
            data:[34,70,2,2,3,5,4,10,21,27,23,12,34,165,35,46,80,60,67,67,88,65,44,44,43]
        }]

};
var barops=[
    {
        series :[
            {
                name:'2012.12-2014.12',
                type:'bar',
                data:[9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            }]
    },{
        series :[
            {
                name:'2012.12-2014.12',
                type:'bar',
                data:[9,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            }]
    },{
        series :[
            {
                name:'2012.12-2014.12',
                type:'bar',
                data:[9,22,55,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            }]
    },{
        series :[
            {
                name:'2012.12-2014.12',
                type:'bar',
                data:[9,22,55,99,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            }]
    }
]
var baroption = {
    title : {
        text: '动态数据',
        subtext: '纯属虚构',
        show:false
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['最新成交价', '预购队列'],
        show:false
    },
    toolbox: {
        show : false,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    dataZoom : {
        show : false,
        start : 0,
        end : 100
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : true,
            show:false
//            data : (function (){
//                var now = new Date();
//                var res = [];
//                var len = 10;
//                while (len--) {
//                    res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
//                    now = new Date(now - 2000);
//                }
//                return res;
//            })()
        }
    ],
    yAxis : [
        {
            type : 'value',
            scale: true,
            name : '人数',
            boundaryGap: [0.2, 0.2]
        }
    ],
    series : [

        {
            name:'最新成交价',
            type:'line',
            data:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        }
    ]
};

// myChart.addData(
//    [
//        0,        // 系列索引
//        {name:"浙江",value:10}, // 新增数据
//        false,     // 新增数据是否从队列头部插入
//        true    // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
//    ]);

var baroption = {
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['单月查处人数'],
        show:false
    },
    toolbox: {
        show : false,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    dataZoom : {
        show : false,
        start : 0,
        end : 100
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : true,
            data : ["\n2012-12","2013-1","\n2013-2","2013-3","\n2013-4","2013-5","\n2013-6","2013-7","\n2013-8","2013-9","\n2013-10","2013-11","\n2013-12","2014-1","\n2014-2","2014-3","\n2014-4","2014-5","\n2014-6","2014-7","\n2014-8","2014-9","\n2014-10","2014-11","\n2014-12"],

            show:false
//            data : (function (){
//                var now = new Date();
//                var res = [];
//                var len = 10;
//                while (len--) {
//                    res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
//                    now = new Date(now - 2000);
//                }
//                return res;
//            })()
        }
    ],
    yAxis : [
        {
            show:false,
            type : 'value',
            scale: true,
            name : '人数',
            boundaryGap: [0.2, 0.2]
        }
    ],
    series : [

        {
            name:'查处人数',
            type:'line',
            data:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        }
    ]
};