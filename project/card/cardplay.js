/*

>>총19명
>>0부터시작


1.카드 19개를 만든다.
2.랜덤으로 이미지를 넣기
3.순서대로 뜨게 만든다. 그리고 전체카드 앞면을 보여주고 다시 덮는다.
4.2개의 카드를 클릭하고 카드가 맞으면 뒤집어놓고 안맞으면 다시 덮기.


*/

var memberNum = 38;
var imgarr = [];


//하나의 원본으로 카드리스트 복제
for(var i = 0; i < memberNum - 1; i++ ){
	var cardbasic = document.querySelector('.card');
	var card = cardbasic.cloneNode(true);
	document.getElementById('cardList').appendChild(card);
}

//카드리스트
var cardAll = document.querySelectorAll('.card');
for(var k = 0; k < memberNum; k++ ){
	//이미지넣기
	var imgContainer = document.querySelectorAll('.back');
	function imgpush(num){
		imgarr.push('<img src="' + 'images/nct'+num+'.jpg' + '" alt="">');
	}

	if(k >= cardAll.length / 2){
		imgpush(k - cardAll.length / 2)
	}else{
		imgpush(k)
	}

	console.log(imgarr);
	imgContainer[k].innerHTML = imgarr[k];

	//카드 보여줬다가 숨기기
	(function cardflip(j){
		setTimeout(function(){
			cardAll[j].classList.add('flip');
		},100*j)
		setTimeout(function(){
			cardAll[j].classList.remove('flip');
		},10000)
	})(k)
}

