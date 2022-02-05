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

.eye::after {
    content: '';
    display: block;
    border: 2px solid black;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    background: white;
    position: absolute;
    top: 1px;
    left: 6px;

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
    z-index: 1;
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

.mouth .down .yuan1::after {
    content: '';
    position: absolute;
    bottom: 110px;
    width: 10px;
    height: 10px;
    left: 50%;
    margin-left: -5px;
    background: #ffe600;
    z-index: 3;
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
let n = 0
demo.innerHTML = string.substring(0, n)
demo2.innerText = string.substring(0, n)

let id = setInterval(() => {
    n++
    if (n > string.length) {
        window.clearInterval(id)
    }

    demo.innerHTML = string.substring(0, n)
    demo2.innerText = string.substring(0, n)
    demo2.scrollTop = demo2.scrollHeight
}, 10)