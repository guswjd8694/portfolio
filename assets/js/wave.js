import {
    Point
} from "./point.js";

export class Wave {
    constructor(index, totalPoints, color){
        this.index = index;     //고유 index를 넘겨줘서 웨이브가 차이를 두고 움직이도록
        this.totalPoints = totalPoints;  //몇 개의 포인트를 생성할 것인지
        this.color = color;
        this.points = [];
    }
    
    //애니메이션 좌표값 알아내기
    //애니메이션 크기를 알아내기 위해 스테이지의 넓이, 높이를 가져옴
    resize(stageWidth, stageHeight){
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        //화면 중간에 놓기 위함
        this.centerX = stageWidth / 2;
        this.centerY = stageHeight * 0.65;
        //포인트 간격 정의
        //포인트 간격 = 총 스테이지 넓이 / totalPoints
        this.pointGap = this.stageWidth / (this.totalPoints -1);

        this.init();
    }

    //resize 이벤트가 일어난 다음 init 함수로 Point 생성
    //resize 이벤트에서 정의했던 centerX,Y값을 넘겨줘서 화면 중간을 기준으로 그려질 수 있게 정의
    init(){
        this.point = [];
        //정해진 포인트 만큼 간격에 맞춰 화면에 그려줌
        for (let i = 0; i < this.totalPoints; i++){
            const point = new Point(
                this.index + i,
                this.pointGap * i,
                this.centerY,
            );
            this.points[i] = point;
        }
    }

    //캔버스에 그리는 draw 함수 실행
    draw(ctx){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        let prevX = this.points[0].x;
        let prevY = this.points[0].y;

        ctx.moveTo(prevX, prevY);

        for (let i = 1; i < this.totalPoints; i++){
            if (i < this.totalPoints - 1){
                this.points[i].update();
            }

            const cx = (prevX + this.points[i].x) / 2;
            const cy = (prevY + this.points[i].y) / 2;

            ctx.quadraticCurveTo(prevX, prevY, cx, cy);

            prevX = this.points[i].x;
            prevY = this.points[i].y;
        }

        ctx.lineTo(prevX, prevY);
        ctx.lineTo(this.stageWidth, this.stageHeight);
        ctx.lineTo(this.points[0].x, this.stageHeight);
        ctx.fill();
        ctx.closePath();
    }
}