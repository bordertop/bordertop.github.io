// JavaScript Document

//  ready
function ready(fn)
{
	if(document.addEventListener)
	{
		document.addEventListener('DOMContentLoaded',fn,false);
	}
	else
	{
		document.attachEvent('onreadystatechange',function (){
			if(document.readyState == 'complete')
			{
				fn();
			}	
		});	
	}
}



//   start
ready(function (){
	var oMyself=document.getElementById('myself');
	
	//  屏幕滚动
	window.onscroll=function (){
		var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
				
		oMyself.style.background='rgba(0,0,0,'+(1-scrollTop/650).toFixed(1)+')';
		
	};
	
		
})
















































