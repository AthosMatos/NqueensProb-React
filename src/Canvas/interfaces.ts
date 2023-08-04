import { PosI } from "../interfaces";

export interface CanvasProps {
    queensPositions?: number[][];
    size: number;
    canvasProps?: React.CanvasHTMLAttributes<HTMLCanvasElement>;
}
