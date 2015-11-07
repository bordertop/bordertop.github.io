// JavaScript Document




//   start
ready(function (){
	var oMyself=document.getElementById('myself');
	var oTwo=document.getElementById('two')
	var oThree=document.getElementById('three')
	var oWork=document.getElementById('work')
	
	//  屏幕滚动
	window.onscroll=window.onresize=function (){
		
		var clientHeight=document.documentElement.clientHeight;
		oTwo.style.height=clientHeight+'px';
		
		//滚动距离
		var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
		
		
		// 导航条变化
		if(scrollTop>350 && scrollTop<1900)
		{
			oTwo.style.top=0;
		}
		else if(scrollTop<350 || scrollTop>1900)
		{
			oTwo.style.top=(-clientHeight)+'px';
		}
		
		
		document.onmousewheel=function (ev)
		{
			oEvent=ev || event;	
			
			if(oEvent.wheelDelta<0)
			{
				oWork.style.top=(300-scrollTop)+'px';	
			}
			else if(oEvent.wheelDelta>0)
			{
				oWork.style.top=(300-scrollTop)+'px';
			}
			
			
		};
		
	};
	
	
		
})
















































