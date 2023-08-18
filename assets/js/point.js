export class Point{
    constructor(index, x, y) {
        this.x = x;
        this.y = y;
        this.fixedY = y;
        this.speed = 0.03; 
        this.cur = index;   //index 값을 넘겨서 현재 몇 번째 point 인지를 정의
        this.max = Math.random() * 60;   //얼만큼 움직일 건지
    }

    update(){
        this.cur += this.speed;     //speed 만큼 현재값 증가
        this.y = this.fixedY + (Math.sin(this.cur) * this.max);    //update 함수를 실행하면 아래 위로 움직이게
    }
}