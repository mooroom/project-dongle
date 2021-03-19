import React from 'react';

// components
import Navbar from "../components/Navbar";
import Container from '../components/Container';

import dongle_thinking from "../asset/img/dongle_thinking1.png";

function AR(props) {
    const bottomStyle = {
        position: "fixed",
        bottom: "0",
        left: "0",
        width: "100%",
        padding: "0 50px",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "flex-end"
    }
    return (
        <div>
            <Navbar color="transparent" />
            <Container flex height="100vh">
                <div>AR 체험</div>
                <div style={{fontSize: "1.5rem", color: "#55119E", fontWeight: "bold"}}>서비스 준비중입니다</div>
                <div style={bottomStyle}>
                    <img src={dongle_thinking} style={{width: "100%"}} alt="img" />
                </div>
            </Container>
        </div>
    );
}

export default AR;