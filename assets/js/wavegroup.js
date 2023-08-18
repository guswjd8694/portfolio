import {
    Wave
} from './wave.js'

//여러 개의 wave를 만들기 위해 WaveGroup 생성
export class WaveGroup {
    constructor() {
        this.totalWaves = 2;
        this.totalPoints = 10;   //몇 개의 point를 하나의 wave에 그릴 것인지

        this.color = [ 'rgba(195,142,143,0.9)', 'rgba(214,141,141, 0.9)', 'rgba(220,137,140, 0.8)'];

        this.waves = [];

        //totalWaves 만큼 Wave 생성
        for (let i = 0; i < this.totalWaves; i++){
            const wave = new Wave(
                i,
                this.totalPoints,
                this.color[i],
            );
            this.waves[i] = wave;
        }
    }

    //WaveGroup 안에 있는 totalWave 만큼 함수 실행
    resize(stageWidth, stageHeight){
        for (let i = 0; i < this.totalWaves; i++){
            const wave = this.waves[i];
            wave.resize(stageWidth, stageHeight);
        }
    }

    draw(ctx){
        for (let i = 0; i < this.totalWaves; i++){
            const wave = this.waves[i];
            wave.draw(ctx);
        }
    }
}