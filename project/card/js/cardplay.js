/*

>>총18명
>>0부터시작


1.카드 18개를 만든다.
2.랜덤으로 이미지를 넣기
3.순서대로 뜨게 만든다. 그리고 전체카드 앞면을 보여주고 다시 덮는다.
4.2개의 카드를 클릭하고 카드가 맞으면 뒤집어놓고 안맞으면 다시 덮기.
* 마크사진을 짝맞출경우 하트추가.

5.다시섞기
버튼 클릭시
- flip 제거
- 처음부터 게임 시작(초기화)
6.초기화

*/

var memberNum = 16 * 2; //사람 명 수 * 2
var imgarr = [];
var img = [];
var selectedCard = [];
var selectedCardAlt = [];

var c,i
var pullbox = {
	c:[],
	i:[],
	a:[]
}
var imgAlt = [
	'태일','쟈니','태용','유타','도영','텐','재현','윈윈','마크','런쥔','제노','해찬','재민','천러','지성','루카스','정우','쿤'
]
var flag = true;
var clicknum = 0;
var favorite = '<span>&#x1F499;</span>';
favorite += '<span>&#x1F49A;</span>';
favorite += '<span>&#x1F49B;</span>';

var resetOn = false;

//하나의 원본으로 카드리스트 복제
for(var i = 0; i < memberNum - 1; i++ ){
	var cardbasic = document.querySelector('.card');
	var card = cardbasic.cloneNode(true);
	document.getElementById('cardList').appendChild(card);
}

//이미지생성
var cardAll = document.querySelectorAll('.card');
var hlafVal = cardAll.length / 2;

function imgCreat(){
	for(var k = 0; k < memberNum; k++ ){
		function imgpush(num,name){
			imgarr.push('<img src="' + 'images/nct'+num+'.jpg' + '" alt="' + name + '">');
		}
		if(k >= hlafVal){
			imgpush(k - hlafVal,imgAlt[k - hlafVal])
		}else{
			imgpush(k,imgAlt[k])
		}
	}
}
function cardGame(resetOn){
	for(var j = 0; j < memberNum; j++ ){
		
		//이미지 랜덤으로 넣기
		var imgContainer = document.querySelectorAll('.back');
		img = img.concat( imgarr.splice( Math.floor(Math.random() * imgarr.length) ,1) );
		imgContainer[j].innerHTML = img[j];

		(function cardflip(k){
			flag = false;
			var openFlip = setTimeout(function(){
				cardAll[k].classList.add('flip');
			},100*j)
			var removeFlip = setTimeout(function(){
				cardAll[k].classList.remove('flip');
				flag = true;
			},10000)
			
			//카드 클릭했을때
			if(!resetOn){
				cardAll[k].addEventListener('click',function(){		
					if(flag && selectedCard.indexOf(this) == -1){//flag가 true이고 완성카드 뽑히지 않았으면 클릭.

						this.classList.toggle('flip');

						pullbox.c.push( this )
						pullbox.i.push( img[k] )
						
						++clicknum
						if(clicknum >= 2){//클릭 여러개 방지.
							flag = false;
						console.log(clicknum,flag)
						}	

						if(pullbox.c.length == 2 && pullbox.i.length == 2){//카드 2장 뽑히면	
							if(pullbox.i[0] === pullbox.i[1] && this.classList.value.includes('flip')){//카드가 서로 맞고 뒤집혀 있는경우

								selectedCard.push ( pullbox.c[0],pullbox.c[1] )
								//* 마크 일경우
								selectedCard.forEach(function(el){
									selectedCardAlt = [];
									selectedCardAlt.push(el.children[1].firstChild.getAttribute('alt'))
								})
								if(selectedCardAlt[0] == '마크'){
									pullbox.c.forEach(function(el){
										var favoriteBox = document.createElement('div');//하트이모지 추가
										favoriteBox.className += 'favorite';
										favoriteBox.innerHTML = favorite;
										el.children[1].appendChild(favoriteBox);
									})
								}
								pullbox.c = [];
								pullbox.i = [];
								clicknum = 0;
								flag = true;
							}else{//안맞는경우
								setTimeout(function(){
									pullbox.c[0].classList.remove('flip');
									pullbox.c[1].classList.remove('flip');
									pullbox.c = [];
									pullbox.i = [];
									clicknum = 0;
									flag = true;
								},1000)
							}
						}		
					}
				});
			}

		})(j)
	}
}
imgCreat();
cardGame();

document.getElementById('btnplay').addEventListener('click',function(){
	var ing = document.querySelectorAll('.flip').length;

	cardAll.forEach(function(c,i,el){
		c.classList.remove('flip');

	})
	imgarr = [];
	imgContainer = [];
	img = [];
	selectedCard = [];
	//selectedCardAlt = [];

	setTimeout(function(){	
		console.log(100*ing)
		imgCreat();
		cardGame(true)
	},100*ing)
})

//리셋이 true일경우 실행 x
//카드가 뒤집힌 수만큼 초를 세고 그뒤에실행