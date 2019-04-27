/**
 * Created by Lily.L on 15/11/2.
 */
;(function($){


    var Carousel=function(poster){
        var self=this;
        this.poster=poster;//保存单个旋转木马对象
        this.posterItemMain=poster.find("ul.poster-list");
        this.nextBtn=poster.find("div.poster-next-btn");
        this.prevBtn=poster.find("div.poster-prev-btn");
        this.posterItems=poster.find("li.poster-item");
        if( this.posterItems.size()%2==0){
            this.posterItemMain.append(this.posterItems.eq(0).clone());
            this.posterItems=this.posterItemMain.children();
        };
        this.posterFirstItem=this.posterItems.first();
        this.posterLastItem=this.posterItems.last();
        this.rotateFlag=true;
        this.arrayItems=this.posterItems.toArray();

        this.time=null;
        //console.log(this.posterItems);
        //默认配置参数

        this.setting={
            "width":1000,
            "height":270,
            "posterWidth":640,
            "posterHeight":270,
            "scale":0.95,
            "speed":500,
            "verticalAlign":"middle"
        };

        $.extend(this.setting,this.getSetting());

        var winWidth=$(window).width();
        $.extend(this.setting,{"width":winWidth});

        this.setSettingValue();
        this.setPosterPos();

        this.nextBtn.click(function(){
            if (self.rotateFlag) {
                self.rotateFlag=false;
                self.carouselRotate("left");

            };


        });
        this.prevBtn.click(function(){
            if (self.rotateFlag) {
                self.rotateFlag=false;
                self.carouselRotate("right");
            };

        })

        if (this.setting.autoPlay) {
            this.autoPlay();
        };

    };

    Carousel.prototype= {

        // 获取人工配置参数
        getSetting:function(){
            var  setting=this.poster.attr("data-setting");

            if (setting&&setting!="") {
                return $.parseJSON(setting);
            }else{
                return {};
            }

        },
        // 设置配置参数值去控制基本宽度高度
        setSettingValue:function(){

            this.poster.css({
                width:this.setting.width,
                height:this.setting.height
            });
            this.posterItemMain.css({
                width:this.setting.width,
                height:this.setting.height
            });
            var w=(this.setting.width-this.setting.posterWidth)/2;
            this.nextBtn.css({
                width:40,
                height:this.setting.height,
                right:w
            });
            this.prevBtn.css({
                width:40,
                height:this.setting.height,
                left:w
            });
            $(this.arrayItems).first().css({
                width:this.setting.posterWidth,
                height:this.setting.posterHeight,
                left:w,
                zIndex:Math.floor(this.posterItems.size()/2)
            });
        },

        // 设置剩余的帧的基本参数
        setPosterPos:function(){

            var self=this;

            var sliceItems=$(this.arrayItems.slice(1)),
                sliceSize=sliceItems.size()/2,
                rightSlice=sliceItems.slice(0,sliceSize),
                leftSlice=sliceItems.slice(sliceSize),
                level=Math.floor(this.posterItems.size()/2);

            //console.log(level);

            //设置右边帧的位置关系和宽度高度
            var rw=this.setting.posterWidth,
                rh=this.setting.posterHeight,
                gap=((this.setting.width-this.setting.posterWidth)/2)/level;

            var firstLeft=(this.setting.width-this.setting.posterWidth)/2;
            var fixOffsetLeft=firstLeft+rw;

            rightSlice.each(function(i){
                level--;
                rw=rw*self.setting.scale;
                rh=rh*self.setting.scale;
                var j=i;
                $(this).css({
                    zIndex:level,
                    width:rw,
                    height:rh,
                    opacity:1/(++j),
                    left:fixOffsetLeft+(++i)*gap-rw,
                    top:self.setVerturcalAlign(rh)
                });
            });

            //设置左边的位置关系
            var lw=rightSlice.last().width(),
                lh=rightSlice.last().height(),
                oloop=Math.floor(this.posterItems.size()/2);

            leftSlice.each(function(i){
                level--;
                var j=i;
                $(this).css({
                    zIndex:i,
                    width:lw,
                    height:lh,
                    opacity:1/oloop,
                    left:i*gap,
                    top:self.setVerturcalAlign(lh)
                });
                oloop--;
                lw=lw/self.setting.scale;
                lh=lh/self.setting.scale;
            });
        },

        //设置垂直排列对齐
        setVerturcalAlign:function(height){

            var verticalType=this.setting.verticalAlign,
                top=0;
            //console.log('height'+verticalType);
            if(verticalType==="middle"){
                top=(this.setting.height-height)/2;
            }else if(verticalType==="top"){
                top=0;
            }else if(verticalType==="bottom"){
                top=(this.setting.height-height);
            }else{
                top=(this.setting.height-height)/2
            }
            return top;
        },

        carouselRotate:function(dir){
            var _this_=this;
            var zIndexArr= new Array();
            if(dir==="left"){

                this.posterItems.each(function(){
                    var self=$(this),
                        prev=self.prev().get(0)?self.prev():_this_.posterLastItem,
                        width=prev.width(),
                        height=prev.height(),
                        zIndex=prev.css("zIndex"),
                        opacity=prev.css("opacity"),
                        left=prev.css("left"),
                        top=prev.css("top");

                    zIndexArr.push(zIndex);

                    self.animate({
                        width:width,
                        height:height,
                        //zIndex:zIndex,
                        opacity:opacity,
                        left:left,
                        top:top
                    },function(){
                        _this_.rotateFlag=true;
                    });
                });

                this.posterItems.each(function(i){
                    $(this).css("zIndex",zIndexArr[i]);
                });

                var t = this.arrayItems.shift();
                this.arrayItems.push(t);

            }else if(dir==="right"){

                this.posterItems.each(function(){
                    var self=$(this),
                        next=self.next().get(0)?self.next():_this_.posterFirstItem,
                        width=next.width(),
                        height=next.height(),
                        zIndex=next.css("zIndex"),
                        opacity=next.css("opacity"),
                        left=next.css("left"),
                        top=next.css("top");

                    zIndexArr.push(zIndex);

                    self.animate({
                        width:width,
                        height:height,
                        //zIndex:zIndex,
                        opacity:opacity,
                        left:left,
                        top:top
                    },function(){
                        _this_.rotateFlag=true;
                    });

                });
                this.posterItems.each(function(i){
                    $(this).css("zIndex",zIndexArr[i]);
                });
                var t = this.arrayItems.pop();
                this.arrayItems.unshift(t);
            }
        },

        autoPlay:function(){
            var self=this;

            self.time=setInterval(function(){
                self.nextBtn.click();
            },this.setting.delay);

            this.poster.hover(function(){
                //console.log("hover")
                clearInterval(self.time);

            },function(){
                clearInterval(self.time);
                self.time=setInterval(function(){
                    self.nextBtn.click();
                },self.setting.delay);
            })

        },

        setResize:function(){
            var self=this;
            clearInterval(self.time);

            var winWidth=$(window).width();
            if(winWidth>1210){
                $.extend(self.setting,{"width":winWidth});
            }else{
                $.extend(self.setting,{"width":1210});
            }

            self.setSettingValue();
            self.setPosterPos();
            if (this.setting.autoPlay) {

                self.autoPlay();
            };

        }
    };

    Carousel.init=function(posters){
        var _this_=this;
        var list=new Array();

        posters.each(function(){
            //new _this_($(this));
            list.push(new _this_($(this)));

        });
        return list;
    };

    window["Carousel"]=Carousel;
})(jQuery);