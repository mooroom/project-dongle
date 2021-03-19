import React from 'react';

import styled from 'styled-components';

// components
import Navbar from "../components/Navbar";
import Container from "../components/Container";

// images
import info_lab from '../asset/img/info_lab.png'

const InfoBlock = styled.div`
    text-align: left;
    .xs {
        font-size: 0.7rem;
        margin-bottom: 1rem;
    }
    .s {
        font-size: 0.8rem;
    }
    h3 {
        color: #55119E
    }
    img {
        width: 100%;
        margin: 2rem 0;
    }
`

const Footer = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 20px 30px;
    box-sizing: border-box;
    color: white;
    background: #55119E;
    width: 100%;
    font-size: 0.8rem;
    .lab{
        font-weight: bold;
        margin-bottom: 1rem;
    }
`

function InfoLab(props) {
    return (
        <div>
            <Navbar color="transparent" />
            <Container top="70px" bottom="158px">
                <InfoBlock>
                    <div className="xs">한국연구재단 과학문화 전시서비스 역량강화 지원사업</div>
                    <h3>뇌과학 가치확산을 위한<br/>과학문화 전시 VR/AR 콘텐츠 개발</h3>
                    <div className="s">연세대학교 생활디자인학과 디지털미디어랩</div> 
                    <img src={info_lab} alt="info_lab"/>
                    <p>
                        뇌과학은 미래의 핵심 기술이며, 인공지능의 원천 모델이나 대중에게는 아직 생소하고 어려운 분야로 인식되어 있습니다.<br/>
                        대중에게 뇌과학 가치 확산을 목표로 캐릭터를 이용한 스토리텔링을 통해 학습 내용을 전달하고, VR/AR과 같은 몰입도 높은 장비를 이용하여 뇌과학의 어렵고 복잡한 개념을 쉽게 배우고 이해할 수 있는 체험형 콘텐츠를 제작합니다.
                    </p>
                </InfoBlock>
            </Container>
            <Footer>
                <div className="lab">Digital Media Lab.<br/>Yonsei University</div>
                <div className="researcher">
                    연구 책임자 | 이상원<br/>
                    참여 연구원 | 이성은, 박재완, 최복규, GE XU, 최수지, 이지은, 곽민지, 김소연, CUI MINGZHU, 박수진, 권서현, XU LONG, 전호용
                </div>
            </Footer>
        </div>
    );
}

export default InfoLab;