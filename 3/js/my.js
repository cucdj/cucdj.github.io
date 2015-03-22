$(function(){
    var p0='',p1='',p2='',p3='',p4='',p5='',p6='',p7='',p8='';



    var mapChart = echarts.init(document.getElementById('cmap'));
    var barChart = echarts.init(document.getElementById('ebar'));
    barChart.setTheme(dark);
    function type(){
        $('#t1').typetype(
            '孟子云，“得天下有道，得其民；得其民有道，得其心。”反腐成效如何，攸关人心向背。',
            {
                e: 0,
                t: 100,
                callback:function(){
                    $('#t2').typetype(
                        '自十八大以来，中央频频亮剑，打虎拍蝇、海外猎狐，对腐败行为“零容忍”。十八届三中全会以来，“把权力关进制度的笼子”不是一句空话；“踏石留印抓铁有痕”不是一句口号。',
                        {
                            e: 0,
                            t: 100,
                            callback:function(){
                                $('#t3').typetype(
                                    '反腐虽已初显成效，但仍面临诸多挑战。',
                                    {
                                        e: 0,
                                        t: 100,
                                        callback:function(){
                                            $('#cb').animo({animation:"fadeIn",duration:1},function(){

                                                    mySwiper.swipeNext();

                                            })
                                        }
                                    }
                                )
                            }
                        }
                    )
                }
            }
        )
    }
    function type2(){
        $('#slide4plain').typetype(
            '在中共十四大后至十八大前的20年间，总计有13人被开除处中央委员会，分别是：十四届的陈希同，十五届的王雪冰、石兆彬、李嘉廷、徐鹏航、许运鸿，十六届的田凤山、杜世成、陈良宇、十七届的于幼军、康日新、薄熙来、刘志军。而自中共十八大至今的两年多以来，中央委员会已有11名成员落马。',
            {
                e: 0,
                t: 50,
                callback:function(){
                    $('#cb').animo({animation:"fadeIn",duration:1},function(){

                            mySwiper.swipeNext();


                    })
                }
            })
        $('#l1').css({visibility:"visible"});
        $('#l1').animo({animation:"fadeInLeft"},function(){
            $('#l2').css({visibility:"visible"});
            $('#l2').animo({animation:"fadeInLeft"},function(){
                $('#l3').css({visibility:"visible"});
                $('#l3').animo({animation:"fadeInLeft"},function(){
                    $('#l4').css({visibility:"visible"});
                    $('#l4').animo({animation:"fadeInLeft"},function(){
                        $('#l5').css({visibility:"visible"});
                        $('#l5').animo({animation:"fadeInLeft"})
                    })
                })
            })
        })
        $('#r1').css({visibility:"visible"});
        $('#r1').animo({animation:"fadeInRight"},function(){
            $('#r2').css({visibility:"visible"});
            $('#r2').animo({animation:"fadeInRight"},function(){
                $('#r3').css({visibility:"visible"});
                $('#r3').animo({animation:"fadeInRight"},function(){
                    $('#r4').css({visibility:"visible"});
                    $('#r4').animo({animation:"fadeInRight"},function(){
                        $('#r5').css({visibility:"visible"});
                        $('#r5').animo({animation:"fadeInRight"},function(){

                        })
                    })
                })
            })
        })

    }
    function plain(){
        function addPlain1(){
            mapChart.setOption(mapData2);
            $('.plain1').css({visibility:"visible"});
            $('.plain1').animo({animation:"fadeInUp",duration:2},function(){
                mapChart.setOption(mapData3);
                $('.plain2').css({visibility:"visible"});
                $('.plain2').animo({animation:"fadeInUp",duration:2},function(){
                    mapChart.setOption(mapData4);
                    $('.plain3').css({visibility:"visible"});
                    $('.plain3').animo({animation:"fadeInUp",duration:2},function(){
                        mapChart.setOption(mapData5);
                        $('.plain4').css({visibility:"visible"});
                        $('.plain4').animo({animation:"fadeInUp",duration:2},function(){
                            mapChart.setOption(mapData1);
                            $('#cb').animo({animation:"fadeIn",duration:1.5},function(){

                                    mySwiper.swipeNext();

                            })
                        });
                    });
                });
            });
        }
        mapChart.setTheme(dark);
        mapChart.setOption(mapData1);
        $('#cmap').css({visibility:"visible"});
        $('#cmap').animo({animation:"fadeInRight",duration:2},function(){
            addPlain1();
        });


    }
    function paoma(){

            $('.marquee').marquee({
                //speed in milliseconds of the marquee
                duration: 7500,
                //gap in pixels between the tickers
                gap: 50,
                //time in milliseconds before the marquee will start animating
                delayBeforeStart: 0,
                //'left' or 'right'
                direction: 'up',
                //true or false - should the marquee be duplicated to show an effect of continues flow
                duplicated: true
            });
            $(".slide3blur").css({visibility:"visible"});
            $(".slide3blur").animo({animation:"fadeIn"});
            $('.marquee').css({visibility:"visible"});
            $('.marquee').animo({animation:"fadeIn"},function(){
                $('.rise').css({visibility:"visible"});
                $('.rise').animo({animation:"fadeInUp",duration:3},function(){
                    barshow();
                });
                $('.slide3plain').css({visibility:"visible"});
                $('.slide3plain').animo({animation:"fadeInUp",duration:3},function(){

                });
            });
            $(".sc").mouseover(function(){
                $('.marquee').marquee('pause')
            });
            $(".sc").mouseout(function(){
                $('.marquee').marquee('resume')
            });

    }

    var bard=[34,70,2,2,3,5,4,10,21,27,23,12,34,165,35,46,80,60,67,67,88,65,44,44,43];
    function barshow(){

        barChart.setOption(baroption);
        var kk=0;
        function get(j){
            if(j>15){
                kk=0;
                return 0;
            }else{
                kk=kk+1;
                return(kk)
            }

        }
        timeTicket = setInterval(function(){

            barChart.addData([
                [
                    0,        // 系列索引
                    bard[get(kk)], // 新增数据
                    true,     // 新增数据是否从队列头部插入
                    false     // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
                ]
            ]);
        }, 250);
        $('#cb').animo({animation:"fadeIn",duration:9},function(){

                mySwiper.swipeNext();

        })
//        for(ai;ai<30;ai++){
//            setTimeout(function(){
//                barChart.setOption(barops[ai]);
//            },1000);
//
//        }
//        setInterval(function(){
//            if(ai<31){
//                alert(ai);
//                ai=ai+1;
//            }
//
//        },3000);

    }
    function zhouyongkang(){
        function addzyk(){
            var width = 600;
            var height = 600;
            var img_w = 60;
            var img_h =60;

            var svg = d3.select("#zyk").append("svg")
                .attr("width",width)
                .attr("height",height);



                var root={
                    "nodes":[
                        { "name": "周永康"   , "image" : "img/zhouyongkang.png" },
                        { "name": "贾晓烨"   , "image" : "img/jiaxiaoye.png" },
                        { "name": "周元清"   , "image" : "img/zhouyuanqing.png" },
                        { "name": "周峰"   , "image" : "img/zhoufeng.png" },
                        { "name": "郭永祥"   , "image" : "img/guoyongxiang.png" },
                        { "name": "冀文林"   , "image" : "img/jiwenlin.png" },
                        { "name": "李华林"   , "image" : "img/lihualin.png" },
                        { "name": "沈定成"   , "image" : "img/shendingcheng.png" },
                        { "name": "李春城"   , "image" : "img/lichuncheng.png" },
                        { "name": "李崇禧"   , "image" : "img/lichongxi.png" },
                        { "name": "蒋洁敏"   , "image" : "img/jiangjiemin.png" },
                        { "name": "王永春"   , "image" : "img/wangyongchun.png" },
                        { "name": "米晓东"   , "image" : "img/mixiaodong.png" },
                        { "name": "李东生"   , "image" : "img/lidongsheng.png" }
                    ],
                    "edges":[
                        { "source": 0 , "target": 1 , "relation":"现任妻子，曾参与买官卖官" },
                        { "source": 0 , "target": 2 , "relation":"三弟，曾仍无锡惠山国土局局长" },
                        { "source": 0 , "target": 3 , "relation":"周元清的儿子" },
                        { "source": 2 , "target": 3 , "relation":"父子" },
                        { "source": 0 , "target": 4 , "relation":"秘书，四川省委秘书长" },
                        { "source": 0 , "target": 5 , "relation":"秘书，海南省副省长" },
                        { "source": 0 , "target": 6 , "relation":"秘书，中石油副总经理" },
                        { "source": 0 , "target": 7 , "relation":"秘书，中石油国际事业副总裁" },
                        { "source": 0 , "target": 8 , "relation":"下属，四川省委副书记" },
                        { "source": 0 , "target": 9 , "relation":"下属，四川省政协主席" },
                        { "source": 0 , "target": 10 , "relation":"下属，国务院国资委主任" },
                        { "source": 0 , "target": 11, "relation":"下属，四川省政协主席" },
                        { "source": 0 , "target": 12 , "relation":"下属，中海油干部" },
                        { "source": 0 , "target": 13, "relation":"下属，公安部副部长" }
                    ]
                };

                var force = d3.layout.force()
                    .nodes(root.nodes)
                    .links(root.edges)
                    .size([width,height])
                    .linkDistance(200)
                    .charge(-1500)
                    .start();

                var edges_line = svg.selectAll("line")
                    .data(root.edges)
                    .enter()
                    .append("line")
                    .style("stroke","#fff")
                    .style("stroke-width",1);

                var edges_text = svg.selectAll(".linetext")
                    .data(root.edges)
                    .enter()
                    .append("text")
                    .attr("class","linetext")
                    .text(function(d){
                        return d.relation;
                    });


                var nodes_img = svg.selectAll("image")
                    .data(root.nodes)
                    .enter()
                    .append("image")
                    .attr("width",img_w)
                    .attr("height",img_h)
                    .attr("xlink:href",function(d){
                        return d.image;
                    })
                    .on("mouseover",function(d,i){

                        edges_text.style("fill-opacity",function(edge){
                            if( edge.source === d || edge.target === d ){
                                return 1.0;
                            }
                        });
                    })
                    .on("mouseout",function(d,i){

                        edges_text.style("fill-opacity",function(edge){
                            if( edge.source === d || edge.target === d ){
                                return 0.0;
                            }
                        });
                    })
                    .call(force.drag);

                var text_dx = -20;
                var text_dy = 20;

                var nodes_text = svg.selectAll(".nodetext")
                    .data(root.nodes)
                    .enter()
                    .append("text")
                    .attr("class","nodetext")
                    .attr("dx",text_dx)
                    .attr("dy",text_dy)
                    .text(function(d){
                        return d.name;
                    });


                force.on("tick", function(){


                    root.nodes.forEach(function(d,i){
                        d.x = d.x - img_w/2 < 0     ? img_w/2 : d.x ;
                        d.x = d.x + img_w/2 > width ? width - img_w/2 : d.x ;
                        d.y = d.y - img_h/2 < 0      ? img_h/2 : d.y ;
                        d.y = d.y + img_h/2 + text_dy > height ? height - img_h/2 - text_dy : d.y ;
                    });


                    edges_line.attr("x1",function(d){ return d.source.x; });
                    edges_line.attr("y1",function(d){ return d.source.y; });
                    edges_line.attr("x2",function(d){ return d.target.x; });
                    edges_line.attr("y2",function(d){ return d.target.y; });


                    edges_text.attr("x",function(d){ return (d.source.x + d.target.x) / 2 ; });
                    edges_text.attr("y",function(d){ return (d.source.y + d.target.y) / 2 ; });



                    nodes_img.attr("x",function(d){ return d.x - img_w/2; });
                    nodes_img.attr("y",function(d){ return d.y - img_h/2; });

                    nodes_text.attr("x",function(d){ return d.x });
                    nodes_text.attr("y",function(d){ return d.y + img_w/2; });
                });

        }
        $('.slide5blur').css({visibility:"visible"});
        $('.slide5blur').animo({animation:"fadeIn"},function(){
            addzyk();
            $('.dalaohu').css({visibility:"visible"});
            $('.dalaohu').animo({animation:"fadeInDown"},function(){
                $('#cb').animo({animation:"fadeIn",duration:5},function(){

                        mySwiper.swipeNext();

                })

            })
        })
    }
    function lingzhengce(){
        function addlzc(){
            var width = 600;
            var height = 600;
            var img_w = 60;
            var img_h =60;

            var svg = d3.select("#lzc").append("svg")
                .attr("width",width)
                .attr("height",height);



            var root={
                "nodes":[
                    { "name": "令政策"   , "image" : "img/lingzhengce.png" },
                    { "name": "令爱女"   , "image" : "img/lingainv.png" },
                    { "name": "令方针"   , "image" : "img/lingfangzhen.png" },
                    { "name": "令狐路线"   , "image" : "img/linghuluxian.png" },
                    { "name": "令完成"   , "image" : "img/lingwancheng.png" },
                    { "name": "王健康"   , "image" : "img/wangjiankang.png" },
                    { "name": "杜善学"   , "image" : "img/dushanxue.png" },
                    { "name": "陈川平"   , "image" : "img/chenchuanping.png" },
                    { "name": "柳遂记"   , "image" : "img/liusuiji.png" },
                    { "name": "杨森林"   , "image" : "img/yangsenlin.png" },
                    { "name": "王茂设"   , "image" : "img/wangmaoshe.png" },
                    { "name": "胡昕"   , "image" : "img/huxin.png" }
                ],
                "edges":[
                    { "source": 0 , "target": 1 , "relation":"同父异母的长姐" },
                    { "source": 0 , "target": 2 , "relation":"令政策的哥哥" },
                    { "source": 0 , "target": 3 , "relation":"令政策的妹妹" },
                    { "source": 0 , "target": 4 , "relation":"令政策的弟弟" },
                    { "source": 0 , "target": 5 , "relation":"令政策的妹夫" },
                    { "source": 3 , "target": 5 , "relation":"令狐路线的丈夫" },
                    { "source": 0 , "target": 6 , "relation":"运城老乡" },
                    { "source": 0 , "target": 7 , "relation":"同乡" },
                    { "source": 8 , "target": 7 , "relation":"同乡" },
                    { "source": 0 , "target": 8 , "relation":"同乡" },
                    { "source": 0 , "target": 9 , "relation":"大学同班同学" },
                    { "source": 0 , "target": 10 , "relation":"来往密切的朋友" },
                    { "source": 0 , "target": 11, "relation":"情妇" }
                ]
            };
            var force = d3.layout.force()
                .nodes(root.nodes)
                .links(root.edges)
                .size([width,height])
                .linkDistance(200)
                .charge(-1500)
                .start();

            var edges_line = svg.selectAll("line")
                .data(root.edges)
                .enter()
                .append("line")
                .style("stroke","#fff")
                .style("stroke-width",1);

            var edges_text = svg.selectAll(".linetext")
                .data(root.edges)
                .enter()
                .append("text")
                .attr("class","linetext")
                .text(function(d){
                    return d.relation;
                });


            var nodes_img = svg.selectAll("image")
                .data(root.nodes)
                .enter()
                .append("image")
                .attr("width",img_w)
                .attr("height",img_h)
                .attr("xlink:href",function(d){
                    return d.image;
                })
                .on("mouseover",function(d,i){

                    edges_text.style("fill-opacity",function(edge){
                        if( edge.source === d || edge.target === d ){
                            return 1.0;
                        }
                    });
                })
                .on("mouseout",function(d,i){

                    edges_text.style("fill-opacity",function(edge){
                        if( edge.source === d || edge.target === d ){
                            return 0.0;
                        }
                    });
                })
                .call(force.drag);

            var text_dx = -20;
            var text_dy = 20;

            var nodes_text = svg.selectAll(".nodetext")
                .data(root.nodes)
                .enter()
                .append("text")
                .attr("class","nodetext")
                .attr("dx",text_dx)
                .attr("dy",text_dy)
                .text(function(d){
                    return d.name;
                });


            force.on("tick", function(){


                root.nodes.forEach(function(d,i){
                    d.x = d.x - img_w/2 < 0     ? img_w/2 : d.x ;
                    d.x = d.x + img_w/2 > width ? width - img_w/2 : d.x ;
                    d.y = d.y - img_h/2 < 0      ? img_h/2 : d.y ;
                    d.y = d.y + img_h/2 + text_dy > height ? height - img_h/2 - text_dy : d.y ;
                });


                edges_line.attr("x1",function(d){ return d.source.x; });
                edges_line.attr("y1",function(d){ return d.source.y; });
                edges_line.attr("x2",function(d){ return d.target.x; });
                edges_line.attr("y2",function(d){ return d.target.y; });


                edges_text.attr("x",function(d){ return (d.source.x + d.target.x) / 2 ; });
                edges_text.attr("y",function(d){ return (d.source.y + d.target.y) / 2 ; });



                nodes_img.attr("x",function(d){ return d.x - img_w/2; });
                nodes_img.attr("y",function(d){ return d.y - img_h/2; });

                nodes_text.attr("x",function(d){ return d.x });
                nodes_text.attr("y",function(d){ return d.y + img_w/2; });
            });

        }
        $('.slide6blur').css({visibility:"visible"});
        $('.slide6blur').animo({animation:"fadeIn"},function(){
            addlzc();
            $('.woan').css({visibility:"visible"});
            $('.woan').animo({animation:"fadeInDown"},function(){
                $('#cb').animo({animation:"fadeIn",duration:5},function(){

                        mySwiper.swipeNext();

                    mySwiper.swipeNext();
                })
            })
        })
    }
    function punish(){
        var sqd={
            "name": "fubai",
            "children": [
                {
                    "name": "判刑",
                    "children": [
                        {"name": "吉林", "size": 1000},
                        {"name": "浙江", "size": 1000},
                        {"name": "福建", "size": 1000},
                        {"name": "四川", "size": 1000},
                        {"name": "新疆", "size": 1000},
                        {"name": "内蒙古", "size": 1000},
                        {"name": "江西", "size": 2000},
                        {"name": "陕西", "size": 2000},
                        {"name": "广东", "size": 2000},
                        {"name": "安徽", "size": 2000},
                        {"name": "山东", "size":2000},
                        {"name": "北京", "size": 2000},
                        {"name": "重庆", "size":2000},
                        {"name": "河南", "size": 3000}
                    ]
                },
                {
                    "name": "双开",
                    "children": [
                        {"name": "福建", "size": 1000},
                        {"name": "安徽", "size": 1000},
                        {"name": "贵州", "size": 1000},
                        {"name": "重庆", "size": 1000},
                        {"name": "陕西", "size": 1000},
                        {"name": "江苏", "size": 1000},
                        {"name": "湖北", "size": 1000},
                        {"name": "河南", "size": 1000},
                        {"name": "广东", "size": 2000},
                        {"name": "江西", "size": 2000},
                        {"name": "内蒙古", "size":2000},
                        {"name": "山东", "size": 2000},
                        {"name": "新疆兵团", "size":2000},
                        {"name": "广西", "size": 3000},
                        {"name": "海南", "size":3000},
                        {"name": "北京", "size": 4000},
                        {"name": "山西", "size":7000}
                    ]
                },
                {
                    "name": "开除党籍",
                    "children": [
                        {"name": "上海", "size": 1000},
                        {"name": "吉林", "size": 2000},
                        {"name": "云南", "size": 2000},
                        {"name": "江苏", "size": 2000},
                        {"name": "浙江", "size": 3000},
                        {"name": "甘肃", "size": 3000},
                        {"name": "青海", "size": 3000},
                        {"name": "广西", "size": 3000},
                        {"name": "海南", "size": 3000},
                        {"name": "辽宁", "size": 3000},
                        {"name": "福建", "size": 3000},
                        {"name": "贵州", "size": 3000},
                        {"name": "新疆兵团", "size": 3000},
                        {"name": "江西", "size": 4000},
                        {"name": "宁夏", "size": 5000},
                        {"name": "黑龙江", "size": 6000},
                        {"name": "山西", "size": 6000},
                        {"name": "陕西", "size": 7000},
                        {"name": "湖北", "size": 7000},
                        {"name": "广东", "size": 9000},
                        {"name": "安徽", "size": 10000},
                        {"name": "四川", "size": 10000},
                        {"name": "山东", "size": 12000},
                        {"name": "北京", "size": 18000}
                    ]
                },

                {
                    "name": "接受调查",
                    "children": [
                        {"name": "西藏", "size": 3000},
                        {"name": "上海", "size": 4000},
                        {"name": "浙江", "size": 4000},
                        {"name": "天津", "size": 5000},
                        {"name": "甘肃", "size": 6000},
                        {"name": "青海", "size": 6000},
                        {"name": "新疆", "size": 6000},
                        {"name": "重庆", "size": 7000},
                        {"name": "宁夏", "size": 7000},
                        {"name": "广西", "size": 9000},
                        {"name": "海南", "size": 10000},
                        {"name": "吉林", "size": 10000},
                        {"name": "内蒙古", "size": 11000},
                        {"name": "山东", "size": 12000},
                        {"name": "黑龙江", "size": 13000},
                        {"name": "辽宁", "size": 14000},
                        {"name": "云南", "size": 14000},
                        {"name": "福建", "size": 15000},
                        {"name": "江苏", "size": 16000},
                        {"name": "北京", "size": 16000},
                        {"name": "河北", "size": 17000},
                        {"name": "安徽", "size": 18000},
                        {"name": "陕西", "size": 19000},
                        {"name": "江西", "size": 18000},
                        {"name": "贵州", "size": 20000},
                        {"name": "湖南", "size": 20000},
                        {"name": "河南", "size": 25000},
                        {"name": "广东", "size": 25000},
                        {"name": "山西", "size": 28000},
                        {"name": "四川", "size": 35000},
                        {"name": "湖北", "size": 41000}
                    ]
                }

            ]
        };
        var diameter = 600,
            format = d3.format(",d");
        function cc(k){
            if(k=='判刑'){
                return "#07AED7"
            }
            if(k=='双开'){
                return "#F58167"
            }
            if(k=='开除党籍'){
                return "#FB404D"
            }
            if(k=='接受调查'){
                return "#FBB44C"
            }
        }

        var bubble = d3.layout.pack()
            .sort(null)
            .size([diameter/1.2, diameter/1.2])
            .padding(1.5);

        var svg = d3.select("#paopao").append("svg")
            .attr("width", diameter)
            .attr("height", diameter)
            .attr("class", "bubble");

        var node = svg.selectAll(".node")
            .data(bubble.nodes(classes(sqd))
                .filter(function(d) { return !d.children; }))
            .enter().append("g")
            .attr("class", "node")
            .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

        node.append("title")
            .text(function(d) { return d.className + ": " + format(d.value); });

        node.append("circle")
            .attr("r", function(d) { return 0; })
            .style("fill", function(d) { return cc(d.packageName) });

        node.append("text")
            .attr("dy", ".3em")
            .style("text-anchor", "middle")
            .text(function(d) { return d.className.substring(0, d.r / 3); });


// Returns a flattened hierarchy containing all leaf nodes under the root.
        function classes(root) {
            var classes = [];

            function recurse(name, node) {
                if (node.children) node.children.forEach(function(child) { recurse(node.name, child); });
                else classes.push({packageName: name, className: node.name, value: node.size});
            }

            recurse(null, root);
            return {children: classes};
        }

        d3.select(self.frameElement).style("height", diameter + "px");
    }
    function anipunish(){
        $('#paopao').css({visibility:"visible"});
        $('#paopao').animo({animation:"fadeInUp"},function(){

            d3.selectAll("circle").transition().duration(1500).attr("r",function(d) { return d.r; });
            $('.lg').css({visibility:"visible"});
            $('.lg').animo({animation:"fadeInDown",duration:2},function(){
                $('#cb').animo({animation:"fadeIn",duration:3},function(){
                    mySwiper.swipeNext();
                })
            })

        })
    }
    function nw(){
        $('.network').css({visibility:"visible"});
        $('.slide8plain').css({visibility:"visible"});

        $('.network').animo({animation:'fadeIn',duration:3});
        $('.network').animo({animation: "spinner",duration:30, iterate: "infinite"});
        $('.slide8plain').animo({animation:'fadeIn'},function(){
            $('#cb').animo({animation:"fadeIn",duration:4},function(){
                mySwiper.swipeNext();
            })
        });

    }
    function cover(){
        $('#cb').animo({animation:'fadeIn',duration:7},function(){
            $('#cover1').css({visibility:"visible"});
            $('#cover1').animo({animation:"fadeIn",duration:3},function(){
                $('#cover2').css({visibility:"visible"});
                $('#cover2').animo({animation:"fadeIn",duration:3},function(){
                        mySwiper.swipeNext();
                })
            })
        })

    }
	function anima(i){
        if(i==0){
            var vv=$('video');
            vv[0].play();
        }
		if(i==1){

            if(p1==''){

                $('.slide1blur').css({visibility:"visible"});
                $('.slide1blur').animo({animation:"fadeIn"},function(){
                    type();
                    p1=1;
                })
            }

		}
		if(i==2){
            if(p2==''){
                plain();
                p2=1;
            }

		}
        if(i==3){
            if(p3==''){
                paoma();
                p3=1;
            }
        }
        if(i==4){
            if(p4==''){
                type2();
                p4=1;
            }
        }
        if(i==5){
            if(p5==''){
                zhouyongkang();
                p5=1;
            }
        }
        if(i==6){
            if(p6==''){
                lingzhengce();
                p6=1;
            }
        }
        if(i==7){
            if(p7==''){
                anipunish()

                p7=1;
            }
        }
        if(i==8){
            if(p8==''){
                nw();
                p8=1;
            }
        }
	}
    function clean(i){
        if(i==0){
            var video=$('video');
            video[0].pause();
        }
        if(i==1){

        }
        if(i==2){

        }
        if(i==3){

        }
        if(i==4){

        }
        if(i==5){

        }
        if(i==6){

        }
        if(i==7){

        }
    }
	var mySwiper = new Swiper('.swiper-container',{
	    //pagination: '.pagination',
	    paginationClickable: true,
        speed:1500,
        touchRatio:0.001,
	    onSlideChangeEnd:function(){
            if(mySwiper.previousIndex==0){
                var video=$('video');
                video[0].pause();
            }
	    	anima(mySwiper.activeIndex);
	    }

    })
    punish();
    mySwiper.disableMousewheelControl();
    mySwiper.disableKeyboardControl();
    if(mySwiper.activeIndex==0){
        cover();
        var vv=$('video');
        vv[0].play();
        var aa=$('audio');
        aa[0].play();

    }
    $('#fbtn').click(function(){
//        mySwiper = new Swiper('.swiper-container',{
//
//            paginationClickable: true,
//            speed:1500,
//            touchRatio:0.0001,
//            onSlideChangeEnd:function(){
//                if(mySwiper.previousIndex==0){
//                    var video=$('video');
//                    video[0].pause();
//                }
//                anima(mySwiper.activeIndex);
//            }
//        })
        mySwiper.touchRatio=1;
        mySwiper.swipeTo(0);
        $('.next').css({visibility:"visible"});
        $('.prev').css({visibility:"visible"});
    })
    $('.next').click(function(){
        mySwiper.swipeNext();
    })
    $('.prev').click(function(){
        mySwiper.swipePrev();
    })
})
  