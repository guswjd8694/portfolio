import{
    WaveGroup
} from "./wavegroup.js";

class App {
    constructor(){
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.getElementById("waves").append(this.canvas);

        //Wave 생성
        this.waveGroup = new WaveGroup();

        //리사이즈 이벤트
        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        //애니메이션 시작
        requestAnimationFrame(this.animate.bind(this));
    }

    //캔버스 더블 사이즈 지정 레티나 디스플레이
    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2, 2);

        this.waveGroup.resize(this.stageWidth, this.stageHeight); //Wave가 실행될 수 있게 resize 이벤트와 animate() 함수에 Wave 추가
    }

    animate(t){
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight); //캔버스 클리어

        this.waveGroup.draw(this.ctx);
        requestAnimationFrame(this.animate.bind(this));
    }
}

//윈도우가 로드되면 App 생성
window.onload = () => {
    new App();
};