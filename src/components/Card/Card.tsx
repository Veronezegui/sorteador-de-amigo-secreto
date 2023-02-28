import { ReactNode } from "react";
import "./style.scss";

interface CardProps {
    children: ReactNode
}

export function Card({ children }: CardProps) {
    return (
        <div className="card">
            {children}
        </div>
    )
}