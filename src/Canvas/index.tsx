import React, { useRef, useEffect } from "react";
import { CanvasProps } from "./interfaces";

const Canvas = (props: CanvasProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const squareSize = 50;
    const draw = (ctx: CanvasRenderingContext2D) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        //Draw a checkerboard pattern of size props.size x props.size
        //Each square is 10px x 10px

        for (let i = 0; i < props.size; i++) {
            for (let j = 0; j < props.size; j++) {
                ctx.fillStyle = (i + j) % 2 === 0 ? "black" : "white";
                if (props.queensPositions && props.queensPositions[i][j] == 1)
                    ctx.fillStyle = "red";

                ctx.fillRect(
                    i * squareSize,
                    j * squareSize,
                    squareSize,
                    squareSize
                );
            }
        }
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const context = canvas.getContext("2d");
        if (!context) return;
        draw(context);
    }, [draw]);

    return (
        <canvas
            width={props.size * squareSize}
            height={props.size * squareSize}
            style={{
                border: "6px solid black"
            }}
            ref={canvasRef}
            {...props.canvasProps}
        />
    );
};

export default Canvas;
