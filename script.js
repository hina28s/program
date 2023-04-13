// スコアを格納する変数
let score = 0;

// クリックしたらスコアを増やす関数
function increaseScore() {
    score++;
    document.getElementById("score").innerText = score;
}

// クリックしたらスコアが増えるようにボタンにイベントリスナーを追加
document.getElementById("click-me").addEventListener("click", increaseScore);
