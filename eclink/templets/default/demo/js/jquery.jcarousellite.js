

//�ƶ��л�����
function scrollDoor(){}
scrollDoor.prototype = {
	sd : function(menus,divs,openClass,closeClass){
	var _this = this;
	if(menus.length != divs.length){ alert("�˵������������ݲ�������һ��!"); return false; }
for(var i = 0 ; i < menus.length ; i++){
	_this.$(menus[i]).value = i;
	_this.$(menus[i]).onmouseover = function(){ //�ƶ��л�
		for(var j = 0 ; j < menus.length ; j++){
		_this.$(menus[j]).className = closeClass;
		_this.$(divs[j]).style.display = "none";
		}
		_this.$(menus[this.value]).className = openClass;
		_this.$(divs[this.value]).style.display = "block";
		}
	}
},
	$ : function(oid){
		if(typeof(oid) == "string")
			return document.getElementById(oid);
			return oid;
		}
	}



//ˮƽ�ֲ���
function yidonghuandeng (ID,rightMid,leftMid,startNub,overNub,overSpeed){
	var MyMar = null;   //�����Ч��
	var SleepTime = 2000; //�ƶ�ʱ��
	
	$(ID).jCarouselLite({
			btnNext: rightMid,
			btnPrev: leftMid,
			visible:startNub,
			scroll:overNub,
			speed:overSpeed
	});
	
	$(ID).bind('mouseover',function(event){   
			clearInterval(MyMar);   
		}).bind('mouseout',function(event){   
			MyMar=setInterval(next,SleepTime);   
	});
	
	function next(){   
		$(rightMid).click();   
	}   
	
	MyMar = setInterval(next,SleepTime);   
}

