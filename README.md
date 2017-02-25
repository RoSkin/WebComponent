function calculs(row, size, bgColor) {
		this.row = row || 3;
		this.size = size || 50;
		this.bgColor=bgColor ||"#35a45f";
		
	}

	calculs.prototype.show = function() {
		var div = document.createElement("div");
		div.className = "countbox";	
		document.body.appendChild(div);	
		var ul = document.createElement("ul");
		span = document.createElement("span");
			ul.className = "count";
			div.appendChild(ul);
			ul.appendChild(span);

			opertion=["1","2","3","4","5","6","7","8","9","+","0","-","*","/","C","="]

			for(var i = 0; i < opertion.length; i++) {		
				span.style.cssText="display:block;background:#fff;box-shadow:0 0 5px #f1f1f1;text-align:right;font-weight:bold;padding:0 10px;margin-bottom:20px";
				span.style.width = (this.size+10) * this.row -20 + "px";
				span.style.height = this.size*0.8 + "px";
				span.style.lineHeight = this.size*0.8 + "px";
				var cleardiv = document.createElement("div");
				cleardiv.style.clear = "both";
				ul.style.cssText="padding:20px;margin:0 auto;clear:both;cursor:pointer";						
				ul.style.backgroundColor= this.bgColor;						
				ul.style.width = (this.size+10) * this.row + "px";
				var li = document.createElement("li");
				li.style.cssText="float:left;margin:5px;text-align:center;color:#fff;font-size:18px;box-shadow:0 0 5px #f1f1f1;list-style:none";
				li.style.width = this.size + "px";
				li.style.height = this.size + "px";
				li.style.lineHeight = this.size + "px";	
				li.innerHTML = opertion[i];
				li.onclick = this.oncalculClick.bind(this);
				li.dataset.index = i;			
			
				ul.appendChild(li);
				
		}
		
		ul.appendChild(cleardiv);	

	}
	
	
	var results="";
	calculs.prototype.oncalculClick = function(ev) {
		var index = ev.currentTarget.dataset.index;	
		if(index==opertion.length-1){
			span.innerHTML =eval(span.innerHTML);
			results="";	
		}else if(index==opertion.length-2){		
			results="";
			span.innerHTML="";
		}else{
			var txt = ev.currentTarget.innerHTML;
			results += txt;
			span.innerHTML=results;
		
		}
	}

	
	
	var calculs = new calculs(4, 60 ,"#35a45f");//（列数/宽高/背景颜色)
	calculs.show();
