import React, { useEffect, useRef, useState } from "react";

interface PieData {
  label: string;
  number: number;
}
interface PieProps {
  size: number;
  data: PieData[];
}
interface Point {
  x: number;
  y: number;
}
interface Sector {
  center: Point;
  radius: number;
  startAngle: number;
  endAngle: number;
}

enum Colors {
  blue,
  red,
  orange,
  green,
  yellow,
}

interface context{
  left:number,
  top:number,
  text:string
}

type sectors=Array<[string, Sector, string]>

const ChartPie: React.FC<PieProps> = ({ size, data }) => {
  const canvas: React.RefObject<HTMLCanvasElement> = useRef(null);
  // const sectors: Array<[string, Sector, string]> = [];
  const [sectors,setSectors]=useState<sectors>([])
  const [tags,setTags]=useState<JSX.Element[]>([<div></div>,])
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

    return ((2 * precentage) / 100) * Math.PI + startAngle;
  }
  function drawPie(el: HTMLCanvasElement, data: PieData[]): void {
    let index: number = 0;
    let startAngle: number = 0;
    let total = data.reduce((a, b) => {
      return { label: "total", number: a.number + b.number };
    }).number;
    while (index < data.length) {
      let prec = (data[index].number / total) * 100;
      let color=Colors[
        index %
          Object.keys(Colors).filter((key) => Number.isNaN(Number(key)))
            .length
      ]
      let endAngle = draw(
        el,
        startAngle,
        prec,
        color
      );
      sectors.push([
        data[index].label,
        {
          center: { x: size / 2, y: size / 2 },
          radius: size / 2,
          startAngle,
          endAngle,
        },
        color
      ]);
      startAngle = endAngle;
      index++;
    }
    setTags(sectors.map((item,i)=><div key={i}><div style={{background:item[2], borderRadius:"50%", height:"12px",width:"12px", display:"inline-block"}}/>{item[0]}</div>))
  }
  function isPointInSector(point: Point, sector: Sector): boolean {
    let pointDistFromCenter: number = Math.sqrt(
      (point.x - sector.center.x) ** 2 + (point.y - sector.center.y) ** 2
    );
    let extra = 0;

    let pointAngleWithY: number =
      Math.atan((point.x - size / 2) / (point.y - size / 2)) + extra;

    if (point.y - size / 2 < 0) {
      pointAngleWithY = Math.PI + pointAngleWithY;
    } else {
      if (point.x - size / 2 < 0)
        pointAngleWithY = 2 * Math.PI + pointAngleWithY;
    }
    return (
      pointDistFromCenter <= sector.radius &&
      sector.startAngle < pointAngleWithY &&
      pointAngleWithY < sector.endAngle
    );
  }
  function checkSector(e: React.MouseEvent): void {
    let board = canvas.current as HTMLCanvasElement;
    let mouseLocationOnCanvas = {
      x: e.clientX - board.offsetLeft,
      y: size - (e.clientY - board.offsetTop),
    };

    for (let i = 0; i < sectors.length; i++) {
      if (isPointInSector(mouseLocationOnCanvas, sectors[i][1])) {
        setShowContext(true)
        setContext({
          top:e.clientY,
          left:e.clientX,
          text:`${sectors[i][0]}:${data.find((obj) => obj.label === sectors[i][0])?.number}`
        })
        
        return;
      }
      setShowContext(false)
    }
  }
  useEffect(() => {
    drawPie(canvas.current as HTMLCanvasElement, data);
  }, []);
  return (
    <div style={{width:`${size}px`}} onMouseOut={()=>setShowContext(false)}>
      <canvas
        id="canvas"
        width={String(size)}
        height={String(size)}
        ref={canvas}
        onMouseMove={checkSector}
        
      ></canvas>
      <div style={{display:"flex", justifyContent:"space-evenly", flexWrap:"wrap"}}>
        {tags}
      </div>
  <div style={{background:"black", color:"white", position:"absolute", cursor:"default", left:context.left+10, top:context.top+10}} hidden={!showContext}>{context.text}</div>
    </div>
  );
};

export default ChartPie;
