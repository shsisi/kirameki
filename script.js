var p = document.getElementById('text');
//タイピングする文字列をここで用意しておく


var textLists = [
    'sns',
    'internet',
    'html',
    'line',
    'twitter',
    'instagram',
    'facebook',
    'mail',
    'url',
    'ios',
    'android',
    'java',
    'css',
    'word',
    'excel',
    'powerpoint',
    'office',
    'windows',
    'macbook',
    'chrome',
    'it',
    'apple',
    'account',
    'google',
    'microsoft',
    'script',
    'unity',
	

];


var checkTexts = [];



createText();

const timer = document.getElementById('timer');
let TIME = 60;
const seikai = document.getElementById('seikai');


const countdown = setInterval(function() {


        timer.textContent = '制限時間：' + --TIME + '秒';
        if(TIME <= 0) finish();


        }, 1000);
            function finish() {
            clearInterval(countdown);


            seikai.textContent = '正確に打てたのは' + score + '回でした！';
            state = false;

}


function createText() {
    //文字列をランダムに取得する
    var rnd = Math.floor(Math.random() * textLists.length);

    //前の文字列を削除してから次の文字列を表示する
    p.textContent = '';

    //文字列を1文字ずつに分解して、それぞれにspanタグを挿入する
    checkTexts = textLists[rnd].split('').map(function(value) {
        var span = document.createElement('span');

        span.textContent = value;
        p.appendChild(span);

        return span;
    });
}



    const scoreLabel=document.getElementById("score");
    const missLabel=document.getElementById("miss");

    let score = 0;
    let miss = 0;

    let state = true;

    //キーボードからの入力は「e.key」に格納されている
    window.addEventListener('keydown', e => {
    if(e.key === checkTexts[0].textContent) {
        if(!state)return;
        console.log("score");
        checkTexts[0].className = 'add-blue';

        score++;
        scoreLabel.textContent=score;

// キー入力時に音声を再生
        const keypressAudio = new Audio('se.mp3');
        keypressAudio.play();


        //0番目の配列要素を削除して、次の1文字を比較対象にする

        checkTexts.shift();
    }else{
        if(!state)return;
        var bool = event.shiftKey;
        if(bool == true){

	const keypressAudio = new Audio('se.mp3');
            keypressAudio.play();

        }else if(bool == false){
        miss++;
        missLabel.textContent=miss;
        }

    }
        //配列要素が空っぽになったら次の問題を出す
        if(!checkTexts.length) createText();


});
