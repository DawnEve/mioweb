// JavaScript Document

// 固定层
function buffer(a,b,c){
	var d;
	return function(){
		if(d)return;
		d=setTimeout(   function(){a.call(this),d=undefined} ,   b ) //b是定时器间隔?
	}
}
		(function(){
		
		
			function e(){
				var d=document.body.scrollTop||document.documentElement.scrollTop;   //console.log("网页高度" + d);
				d>b?(a.className="div1 div2",c&&(a.style.top=d-b+"px")):a.className="div1";		
				
				var ding=3000;   var wjl=d-b; console.log("网页高度" + wjl);
				if (wjl>ding) a.style.top=ding;
				
			}
			
			
			var a=document.getElementById("float");//a为需要固定不浮动的图层的ID号。
			if(a==undefined)return!1;
			
			var b=0,c,d=a;  //d为需要浮动的层顶部高度，开始和a一致
			
			while(d)
				b+=d.offsetTop, d=d.offsetParent;   
				
				c=window.ActiveXObject&&!window.XMLHttpRequest; 
				
				
			if(!c||!0)window.onscroll=buffer(e,10,this)
			
		})();
			
			// 左边导航跑到底部时会继续下行，怎么避免？
			// d-2000>b?(a.className="div1 div3",c&&(a.style.top=d-b+"px")):a.className="div1";