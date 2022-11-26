import { Outlet } from "react-router-dom";
import { Container, Header, Link } from "./Layout.styled";

export const Layout = () => {
    return (
        <Container>
            <Header>
                <nav>
                    <Link to="/" end>Home</Link>
                    <Link to="/rates">Rates</Link>
                </nav>
            </Header>
            <Outlet />
        </Container>
    );
};