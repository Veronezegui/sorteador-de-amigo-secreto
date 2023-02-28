import "./style.scss"

interface TitleProps {
    text: string
}

export function Title({ text }: TitleProps) {
    return (
        <>
            <p className="title">{text}</p>
        </>
    )
}