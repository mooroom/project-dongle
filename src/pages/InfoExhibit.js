import React from 'react';

import styled from 'styled-components'

// components
import Navbar from "../components/Navbar";
import Container from '../components/Container';

const InfoBlock = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .item {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .circle {
        width: 70px;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #55119E;
        color: #55119E;
        border-radius: 50%;
        font-weight: bold;
    }

    .text {
        font-size: 0.8rem;
        margin-top: 0.5rem;
    }

    .x {
        transform: rotate(45deg)
    }

    margin-bottom: 3rem;
`

function InfoExhibit(props) {
    return (
        <div>
            <Navbar color="transparent" />
            <Container top="70px">
                <InfoBlock>
                    <div className="item">
                        <div className="circle">
                            배워보기
                        </div>
                        <div className="text">웹사이트 체험</div>
                    </div>
                    <div className="x">+</div>
                    <div className="item">
                        <div className="circle">
                            같이놀기
                        </div>
                        <div className="text">VR 체험</div>
                    </div>
                    <div className="x">+</div>
                    <div className="item">
                        <div className="circle">
                            만나보기
                        </div>
                        <div className="text">AR 체험</div>
                    </div>
                    
                </InfoBlock>
                <h2 style={{textAlign: 'left', width: "100%"}}>인공지능 동글</h2>
                <p>
                    “인공지능 동글”은 뇌 과학 인공지능에 대해서 배울 수 있는 교육 인터랙티브 콘텐츠입니다.<br/><br/>

                    인공지능 캐릭터 동글이의 성장을 돕는 스토리와 함께 인공지능을 배워보세요!<br/><br/>

                    (1) 배워보기: 인공지능의 주요 프로세스인 분류(Training & Classification)를 직접 진행해보며 학습하기<br/>
                    (2) 같이 놀기: 인공지능의 풀 바디 트래킹을 활용. 인공지능 캐릭터 동글이에게 춤을 알려주고, 함께 바이러스를 잡아보며 인공지능의 작동 학습하기<br/>
                    (3) 만나보기 (준비중)
                </p>
            </Container>
        </div>
    );
}

export default InfoExhibit;