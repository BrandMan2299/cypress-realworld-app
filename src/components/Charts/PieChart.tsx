import React, { useEffect, useRef } from "react";

interface PieData{
    label:string,
    number:number
}
interface PieProps{
    size:number,
    data:PieData[]
}



<<<<<<< HEAD
enum Colors{blue,red,orange,green,yellow}
=======
const ChartPie: React.FC<PieProps> = ({ size, data }) => {
  const canvas: React.RefObject<HTMLCanvasElement> = useRef(null);
  // const sectors: Array<[string, Sector, string]> = [];
  const [sectors,setSectors]=useState<sectors>([])
<<<<<<< Updated upstream
  const [tags,setTags]=useState([<div></div>,])
=======
  const [tags,setTags]=useState<JSX.Element[]>([<div></div>,])
>>>>>>> Stashed changes
  const [showContext,setShowContext]=useState<boolean>(false)
  const [context,setContext]=useState<context>({top:0,left:0,text:""})
  function draw(
    el: HTMLCanvasElement,
    startAngle: number,
    precentage: number,
    color: string
  ): number {
    let begining = 1.5 * Math.PI + startAngle;
    let ctx = el.getContext("2d") as CanvasRenderingContext2D;
    ctx.beginPath();
    ctx.arc(
      size / 2,
      size / 2,
      size / 2,
      begining,
      begining + ((2 * precentage) / 100) * Math.PI
    );
    ctx.lineTo(size / 2, size / 2);
    ctx.fillStyle = color;
    ctx.fill();
>>>>>>> parent of 95d98b6... f

const ChartPie:React.FC<PieProps>=({size,data})=>{
    const canvas: React.RefObject<HTMLCanvasElement>=useRef(null)
    function draw(el:HTMLCanvasElement,startAngle:number,precentage:number,color:string):number{
        let begining=1.5*Math.PI+startAngle
        console.log({begining})
        let ctx=el.getContext('2d') as CanvasRenderingContext2D
        ctx.beginPath();
        ctx.arc(size/2,size/2,size/2,begining,begining+2*precentage/100*Math.PI);
        ctx.lineTo(size/2,size/2)
        ctx.fillStyle=color;
        ctx.fill()
        return 2*precentage/100*Math.PI+startAngle
    }
    function drawPie(el:HTMLCanvasElement,data:PieData[]):void{
        let index:number=0
        let startAngle:number=0
        let total=data.reduce((a,b)=>{return{label:"total",number:a.number+b.number}}).number
        while(index<data.length){
            console.log('draw')
            let prec=(data[index].number/total)*100
            console.log(prec)
            startAngle=draw(el,startAngle,prec,Colors[index])
            index++
        }
    }
    useEffect(()=>{
        drawPie(canvas.current as HTMLCanvasElement, data)
    },[])
    return (
        <canvas id="canvas" width={String(size)} height={String(size)} ref={canvas}></canvas>
    )
}

export default ChartPie;