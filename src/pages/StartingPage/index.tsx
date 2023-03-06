import { Form } from "../../components/Form/Form";
import { Card } from "../../components/Card/Card";
import { Header } from "../../components/Header/Header";
import { Title } from "../../components/Title/Title";
import "./style.scss";
import { ParticipantsList } from "../../components/ParticipantsList/ParticipantsList";
import { Footer } from "../../components/Footer/Footer";

export function StartingPage() {
    return (
        <>
            <Header />
            <Card>
                <Title text="Vamos começar" />
                <Form />
                <ParticipantsList />
                <Footer />
            </Card>
        </>
    )
}