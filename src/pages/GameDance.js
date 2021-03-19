import React from 'react';

import styled from 'styled-components'

// components
import Navbar from "../components/Navbar";
import BodyBackground from '../components/BodyBackground';
import Container from '../components/Container';

import dongle_dance from '../asset/img/dongle_dance.png'

import {ReactComponent as DownloadIcon} from '../asset/img/icon_download.svg'

const TextBlock = styled.div`
    color: white;
`

const ImageBlock = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: flex-end;
    .download {
        position: absolute;
        top: 30px;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 50%;
        width: 50px;
        height: 50px;
        background: #55119E;
        display: flex;
        align-items: center;
        justify-content: center;

        & > * {
            width: 25px;
            height: 25px;
        }
    }

    img {
        width: 100%;
    }
`

function GameDance(props) {
    return (
        <div>
            <BodyBackground color="#8C63BC"/>
            <Navbar color="transparent" />
            <Container top="70px">
                <TextBlock>
                    <h2>인공지능 같이 놀기</h2>
                    <p>아이돌이 되고 싶은 동글이에게 춤을 알려주자!</p>
                    <p>
                    여러분의 도움으로 성장한 동글이와 함께 같이 놀아볼까요? 
                    인공지능의 풀 바디 트래킹을 이용하여 동글이가 여러분의 움직임을 따라할 수 있어요.<br/><br/>
                    아이돌 동글이와 함께 춤추러 가볼까요?
                    </p>
                </TextBlock>
                <ImageBlock>
                    <div className="download">
                        <DownloadIcon fill="white"/>
                    </div>
                    <img src={dongle_dance} alt="dongle_dance"/>
                </ImageBlock>
            </Container>
        </div>
    );
}

export default GameDance;