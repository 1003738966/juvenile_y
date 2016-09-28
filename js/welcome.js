
$(function(){
	function rem(size){
		var clientW=$(window).width();
		var bili=clientW/size;
		var fontSize=bili*100;
		$("html").css({fontSize:fontSize})
		}
	
		rem(360);
		
		var swipers=$(".swiper-slide");
		//var swiper = new Swiper('.swiper-container');
		var mySwiper = new Swiper('.swiper-container',{
			pagination : '.swiper-pagination',
			paginationClickable :true,
			
			onSlideChangeEnd:function(swiper){
				swipers[mySwiper.activeIndex].getElementsByClassName("logo")[0].style.webkitAnimation="logo 1s ease forwards 0.1s";
				swipers[mySwiper.activeIndex].getElementsByClassName("bg_di")[0].style.webkitAnimation="bg_di 1s cubic-bezier(0.3,0.3,0.45,1.56) forwards 1s";   
				swipers[mySwiper.activeIndex].getElementsByClassName("copy")[0].style.webkitAnimation="copy 1s cubic-bezier(0.3,0.3,0.45,1.56) forwards 1.4s";
				}



});

	
		
		//alert(swipers.length)
		/*swipers[mySwiper.activeIndex].find(".logo").css({webkitAnimation:"logo 1s cubic-bezier(0.3,0.3,0.45,1.56) forwards 0.2s"});
		swipers[mySwiper.activeIndex].find(".bg_di").css({webkitAnimation:"bg_di 1s cubic-bezier(0.3,0.3,0.45,1.56) forwards 1s"});
		swipers[mySwiper.activeIndex].find(".copy").css({webkitAnimation:"copy 1s cubic-bezier(0.3,0.3,0.45,1.56) forwards 1.4s"});*/
		
		
		
		
	});
	
