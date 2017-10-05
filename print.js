var letters=['A','B','C','D'];
function getLetter(){
	var i=Math.floor(Math.random()*letters.length);
	return letters[i];
}
function id(ID){
	return document.getElementById(ID);
	}
function tag(name,father){
	father=father||document;
	return document.getElementsByTagName(name);
	}
// 将类数组转化成纯数组
function changeArray(likeArray){
	var arr=[];
	for(var i=0;i<likeArray.length;i++){
		arr.push(likeArray[i]);
	}
	return arr;
}
function showNewLetter(){
	//创建一个span
	var span=document.createElement('span');
	//让新的span显示一个字母
	span.innerHTML=getLetter();
	// 设置水平随机位置
	span.style.left=Math.random()*750+'px';
	//将新的span加入con中
	id('con').appendChild(span);
}
function fall(){
	//找到当前所有的span
	var spans=tag('span'),newTop;
	// 判断本次下落有没有元素超出边界要干掉
	if(spans.length>0&&spans[0].offsetTop+50>=600){
		
		id('con').removeChild(spans[0]);

	}
	
	//遍历每一个span将top值自加自身高度
	for(var i=0;i<spans.length;i++){
		newTop=spans[i].offsetTop+50;//取一个元素的top值,尽量不在一个for循环中声明变量
		spans[i].style.top=newTop+'px';//

	}
}
function start(){
	// 不断创建新的字母并显示
setInterval(function(){
	fall();
	showNewLetter();
},1000);
//给文档绑定事件
document.onkeyup=function(e){
	// 如果有你点击的字母相关的span则删除
	var spans=tag('span');
	spans=changeArray(spans);
	for(var i=0;i<spans.length;i++){
		if(spans[i].className!='dh'&&spans[i].innerText==letters[e.keyCode-65]){
			// 添加消失动画
			spans[i].className='dh';
			setTimeout(function(){
				id('con').removeChild(spans[i]);
			},600);
			break;
		}
		}
};
}
window.onload=function(){
	start();
};
