import "./style.scss"

export function Header() {
    return (
        <div className="headerContainer">
            <div className="content">
                <div className="logoContainer">
                    <img src="/logo.png" alt=""  className="logo"/>
                    <img src="/logo-pequeno.png" alt="" className="logo-pequeno" />
                </div>
                <div className="participantContainer">
                    <img src="/participante.png" alt="" className="participant"/>
                </div>
            </div>
        </div>
    )
}