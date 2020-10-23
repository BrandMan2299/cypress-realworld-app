import React, { useEffect, useRef } from "react";

interface PieData{
    label:string,
    number:number
}
interface PieProps{
    size:number,
    data:PieData[]
}
interface Point{
    x:number,
    y:number
}
interface Sector{
    center:Point,
    radius:number,
    startAngle:number,
    endAngle:number
}


enum Colors{blue,red,orange,green,yellow}

const ChartPie:React.FC<PieProps>=({size,data})=>{
    const canvas: React.RefObject<HTMLCanvasElement>=useRef(null)
    const sectors:Array<[string,Sector]>=[]
    function draw(el:HTMLCanvasElement,startAngle:number,precentage:number,color:string):number{
        let begining=1.5*Math.PI+startAngle
        console.log({begining})
        let ctx=el.getContext('2d') as CanvasRenderingContext2D
        ctx.beginPath();
        ctx.arc(size/2,size/2,size/2,begining,begining+2*precentage/100*Math.PI);
        ctx.lineTo(size/2,size/2)
        ctx.fillStyle=color;
        ctx.fill()
        sectors.push([color,{center:{x:size/2,y:size/2},radius:size/2,startAngle,endAngle:2*precentage/100*Math.PI+startAngle}])
        return 2*precentage/100*Math.PI+startAngle
    }
    function drawPie(el:HTMLCanvasElement,data:PieData[]):void{
        let index:number=0
        let startAngle:number=0
        let total=data.reduce((a,b)=>{return{label:"total",number:a.number+b.number}}).number
        while(index<data.length){
            let prec=(data[index].number/total)*100
            startAngle=draw(el,startAngle,prec,Colors[index])
            index++
        }
    }
    function isPointInSector(point:Point,sector:Sector):boolean{
        
        let pointDistFromCenter:number=Math.sqrt((point.x-sector.center.x)**2+(point.y-sector.center.y)**2)
        let extra=0
        if (point.x<0) extra+=Math.PI
        if (point.y<0) extra+=Math.PI*2
        let pointAngleWithY:number=Math.atan((point.x-size/2)/(point.y-size/2)+extra)
        console.log(pointAngleWithY)
        return pointDistFromCenter<=sector.radius&&sector.startAngle<pointAngleWithY&&pointAngleWithY<sector.endAngle
    }
    function checkSector(e:React.MouseEvent):void{
        
        let board=canvas.current as HTMLCanvasElement
        
        let mouseLocationOnCanvas={x:e.clientX-board.offsetLeft,y:size-(e.clientY-board.offsetTop)}

        for (let i=0;i<sectors.length;i++){
            if (isPointInSector(mouseLocationOnCanvas,sectors[i][1])){
                console.log(sectors[i][0])
                return
            }
        }
    }
    useEffect(()=>{
        drawPie(canvas.current as HTMLCanvasElement, data)
    },[])
    return (
        <canvas id="canvas" width={String(size)} height={String(size)} ref={canvas} onMouseMove={checkSector}></canvas>
    )
}

export default ChartPie;