$(document).ready(function() {
$("#start").click(function(){
var speed = 20
var score = 0
	$("#miavor").show()
	$("#me").css({
		left:0,
		right:0,
		bottom:0
	})
	$("#me").show()
	$(this).hide(500)
	$("#board").css({
		 			backgroundColor:"#50BFFF"
		 		})
	$(".gameOver").animate({
		 			opacity: 0,
		 			fontSize:"0px"
		 		},500);
	$(document).keydown(function(e){
		if(e.key=="ArrowRight" || e.key=="d" && $("#me").position().left<$("#board").width()-$("#me").width()-20){

			$("#me").animate({left:"+=40px"},5)			
		}
				if(e.key=="ArrowLeft" || e.key=="a" && $("#me").position().left>0-$("#board").width()+$("#me").width()+20){
			$("#me").animate({left:"-=40px"},5)			
		}
		if(e.key==" "){
			var div = $(`<div class='fire'></div>`)
			var x= $("#center").offset().left
			var y= $("#center").offset().top
			div.css({
				left:x-195,
				top:y
			})
			$("#me").after(div)
		}
	})
	 var fire = setInterval(function(){
	 	$(".fire").css({top:"-=30px"})
	 },100)
	 var dushman = setInterval(function(){
	 	var div=$(`<div class='dushman'></div>`)
	 	var r = Math.floor(Math.random()*($("#board").width()-90))
	 	div.css({
	 		left:r
	 	})
	 	$('#ddd').append(div)
	 },2000)
	 var score = 0
	 var verjnakan = setInterval(function(){
	 	$(".dushman").css({
	 		top:`+=${speed}px`
	 	})
	 	$(".fire").each(function(){
	 	if($(this).position().top<-20){
	 		$(this).remove()
	 	}
	 })
	 	$(".dushman").each(function(){
		 	if($(this).position().top>($("#board").height()-180)){
		 		$(this).remove()
		 		$("#start").show(500)
		 		clearInterval(verjnakan)
		 		clearInterval(dushman)
		 		clearInterval(fire)
		 		$("#board").css({
		 			backgroundColor:"red"
		 		})
		 		$(".gameOver").animate({
		 			opacity: 1,
		 			fontSize:"50px"
		 		},500);
		 		$(".fire").remove()
				$("#me").hide()
				$("#miavor").html(0+" Score")
				$("#miavor").hide()
		 		$("#ddd").empty()

		 	}
			var _this = this
			 	$(".fire").each(function(){
			 		var left = Math.abs($(_this).position().left-$(this).position().left+35) // math abs talis e tvi bacardzak arjeq
			 		var top = Math.abs($(_this).position().top-$(this).position().top+55)
			 		if(left<30 && top<40 && _this.style.opacity!="0.9"){
			 			score++			 				
			 			if(score>5){
			 				speed = 50
			 			}
			 			$("#miavor").html(score+" Score")
			 			$(this).remove()
			 			$(_this).css({
			 				opacity:0.9,
			 				backgroundImage:`url(boom.png)`
			 			})
			 		var c = 0	
			 		var boom = setInterval(function(){
			 			c++
			 			if(c>1){
			 				$(_this).remove()
			 				clearInterval(boom)
			 			}
			 		},500)
			 		}
			 })
		 })

	 },600)
		
	}) 	
});