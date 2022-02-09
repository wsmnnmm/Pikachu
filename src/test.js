const string = `* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    background: #ffe600;
    min-height: 100vh;
}

.skin {
    position: relative;
}

@keyframes wave {
    0% {transform: rotate(15deg);}
    100% {transform: rotate(-15deg);}
}

.nose {
    width: 0px;
    height: 0px;
    border: 16px solid black;
    border-color: black transparent transparent;
    margin-left: -16px;
    border-radius: 50%;
    position: relative;
    left: 50%;
    margin-left: -16px;
    top: -16px; 
    top: 145px;
    animation: wave 1s infinite linear alternate;
}

.eye {
    position: absolute;
    border: 2px solid black;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    left: 50%;
    margin-left: -25px;
    top: 100px;
    background: #2e2e2e;
}

.eye.left {
    transform: translateX(-100px);
}

.eye.right {
    transform: translateX(100px);
}

@keyframes eye {
    0% {top: 2px; left: 4px;}
    12.5% {top:1px; left: 6px;}
    25% {top: 0px; left: 8px;}
    37.5% {top: -1px; left: 10px;}
    50% {top: -2px; left: 12px;}
    62.5% {top: -1px; left: 14px;}
    75% {top: 0px; left: 16px;}
    87.5% {top: 1px;left: 18px;}
    100% {top: 2px;left: 20px;}
}

.eye::after {
    content: '';
    display: block;
    border: 2px solid black;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    background: white;
    position: absolute;
    top: 2px;
    left: 4px;
    animation: 1s eye infinite alternate;
}

.mouth {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    margin-left: -100px;
    top: 170px;
}

.mouth .up .lip {
    position: absolute;
    border: 2px solid black;
    width: 80px;
    height: 26px;
    top: -2px;
    left: 50%;
    border-top: none;
    margin-left: -40px;
    background: #ffe600;
    z-index: 5;
}

.mouth .up .lip.left {
    position: absolute;
    border-bottom-left-radius: 40px 25px;
    border-right: none;
    transform: translate(-51%) rotate(-18deg);
}

.mouth .up .lip.right {
    position: absolute;
    border-bottom-right-radius: 40px 25px;
    border-left: none;
    transform: translate(51%) rotate(18deg);
}

.mouth .down {
    position: absolute;
    height: 120px;
    width: 100%;
    overflow: hidden;
    top: 1px;
}

.mouth .down .yuan1 {
    position: absolute;
    height: 600px;
    width: 100px;
    bottom: 0;
    left: 50%;
    margin-left: -50px;
    border: 2px solid black;
    border-radius: 300px/900px;
    background-color: #990513;
    overflow: hidden;
}

.mouth .up::after {
    content: '';
    position: absolute;
    top: 0;
    width: 10px;
    height: 10px;
    left: 50%;
    margin-left: -5px;
    background: #ffe600;
    z-index: 6;
}

@keyframes down {
    0% {height: 120px;}
    100% {height: 0;}
}

.mouth:hover>.down {
    animation: 1s down alternate forwards;
}

.mouth .down .yuan2 {
    position: absolute;
    bottom: -218px;
    width: 120px;
    height: 300px;
    z-index: 2;
    left: 50%;
    margin-left: -60px;
    border-radius: 220px;
    background: #fc4a62;
}

.face {
    width: 68px;
    height: 68px;
    border: 2px solid black;
    position: absolute;
    top: 200px;
    left: 50%;
    border-radius: 50%;
    margin-left: -34px;
    background: #fc0d1c;
}

.face.left {
    transform: translateX(-150px);
}

.face.right {
    transform: translateX(150px)
}
`
const player = {
    n: 0,
    time: 10,
    id: undefined,
    elements: {
        show: document.querySelector("#show"),
        style: document.querySelector("#style"),
    },
    init: () => {
        player.bindEvents();
        player.play();
    },
    play: () => {
        clearInterval(player.id);
        player.id = setInterval(player.Run, player.time);
    },
    Run: () => {
        if (player.n < string.length) {
            player.n += 1;
            player.elements.show.innerText = string.substring(0, player.n);
            player.elements.style.innerHTML = string.substring(0, player.n);
            player.elements.show.scrollTop = player.elements.show.scrollHeight;
        } else {
            return;
        }
    },
    stop: () => {
        clearInterval(player.id);
    },
    slow: () => {
        player.time = 100;
        player.play();
    },
    normal: () => {
        player.time = 50;
        player.play();
    },
    fast: () => {
        player.time = 0;
        player.play();
    },
    replay: () => {
        player.time = 10;
        player.n = 0;
        player.play();
    },
    events: {
        "#slowBtn": "slow",
        "#stopBtn": "stop",
        "#playBtn": "play",
        "#normalBtn": "normal",
        "#fastBtn": "fast",
        "#replayBtn": "replay",
    },
    bindEvents: () => {
        for (let key in player.events) {
            let eventsValue = player.events[key];
            document.querySelector(key).onclick = player[eventsValue];
        }
    },
};
player.init();