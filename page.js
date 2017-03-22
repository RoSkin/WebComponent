"use strict";

	const Page = function(element , pageSize, data){	
		this.element = element;
		this.pageSize = pageSize || 5;
		this.data = data;
		this.curPage = 1;
		this.pages = Math.ceil(this.data.length / this.pageSize); 
		this.selector();
	}
	

	Page.prototype = {
		selector : function(){
			let txt =document.querySelector( this.element);
			this.ul = document.createElement("ul");		
			this.Pagination = document.createElement("div");		
			this.prevBtn= document.createElement("a");		
			this.nextBtn= document.createElement("a");		
			this.prevBtn.innerHTML = "上一页";
			this.nextBtn.innerHTML = "下一页";
			txt.appendChild(this.ul);
			txt.appendChild(this.Pagination);
			this.Pagination.appendChild(this.prevBtn);
			this.Pagination.appendChild(this.nextBtn);
			this.setData();
		
		},
		
		setData : function(){
			this.datas = this.data.slice((this.pageSize * (this.curPage - 1)), (this.curPage * this.pageSize));//(0,5) (5,10);
			this.show();
			this.prevBtn.onclick=this.Prev.bind(this);
			this.nextBtn.onclick=this.Next.bind(this);
		},
		
		selectPage : function(page){
			this.curPage = page;	
			this.setData();  		
		},
		
		Prev : function(){
			if(this.curPage == 1){		
				alert("当前是第一页");
				return;		
			}
			this.selectPage(this.curPage - 1);
		},
		
		Next : function(){
			if(this.curPage == this.pages){		
				alert("当前是最后一页");
				return;		
			}
			this.selectPage(this.curPage + 1);
			
		},
				
		show : function(){	
			let ihtml = '';
			for(let i=0;i<this.datas.length;i++){
				ihtml += "<li>"+this.datas[i].id +"</li>";
			}
			this.ul.innerHTML = ihtml;	
		}
		
	
	}
