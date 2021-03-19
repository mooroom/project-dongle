import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// packages
import styled, {keyframes, css} from 'styled-components';

const fadeIn = keyframes`
    from {opacity: 0}
    to {opacity: 1}
` 

const fadeOut = keyframes`
    from {opacity: 1}
    to {opacity: 0}
`

const slideUp = keyframes`
    from { transform: translateY(200px) }
    to { transform: translateY(0px) }
`

const slideDown = keyframes`
    from { transform: translateY(0px) }
    to { transform: translateY(200px) }
`

const DarkBackground = styled.div`
    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 50px;
    box-sizing: border-box;
    background: rgba(0,0,0,0.7);

    animation-duration: 0.25s;
    animation-timing-function: ease-out;
    animation-name: ${fadeIn};
    animation-fill-mode: forwards;

    ${props =>
        props.disappear &&
        css`
            animation-name: ${fadeOut};
        `
    }
`

const ItemBlock = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    animation-duration: 0.25s;
    animation-timing-function: ease-out;
    animation-name: ${slideUp};
    animation-fill-mode: forwards;

    ${props =>
        props.disappear &&
        css`
            animation-name: ${slideDown};
        `
    }
`

const ItemRow = styled.div`
    width: 100%;
    display:  flex;
    justify-content: center;
    align-items: center;

    & + & {
        margin-top: 1rem;
    }

    a {
        width: initial;
    }

    a + a {
        margin-left: 1rem;
    }
`

const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    ${props =>
        props.background &&
        css`
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            background-image: url(${props.background});
        `
    }
    width: 80px;
    height: 80px;
    padding: 10px;
    border-radius: 20px;
    background: white;
    word-break: keep-all;
    color: black;
    font-weight: bold;

    ${props =>
        props.purple ? css`background: #55119E; color: white` : css`background: #FFEA00;`
    }
`

function Menu({visible, onCancel}) {
    const [animate, setAnimate] = useState(false);
    const [localVisible, setLocalVisible] = useState(visible);

    useEffect(() => {
        if (localVisible && !visible) {
            setAnimate(true);
            setTimeout(() => setAnimate(false), 250);
        }
        setLocalVisible(visible);
    }, [localVisible, visible])

    if (!animate && !localVisible) return null;
    return (
        <DarkBackground disappear={!visible} onClick={onCancel}>
            <ItemBlock disappear={!visible}>
                <ItemRow>
                    <Link to="/exhibit">
                        <Item purple>전시안내</Item>
                    </Link>
                    <Link to="/lab">
                        <Item>프로젝트 & 연구실 안내</Item>
                    </Link>
                </ItemRow>
                <ItemRow>
                    <Link to="/ar">
                        <Item purple>AR 서비스 준비중</Item>
                    </Link>
                    <Link to="/learn1">
                        <Item>배워보기</Item>
                    </Link>
                </ItemRow>
                <ItemRow>
                    <Link to="/dance">
                        <Item>춤추기</Item>
                    </Link>
                    <Link to="/virus">
                        <Item>바이러스 잡기</Item>
                    </Link>
                </ItemRow>
            </ItemBlock>
        </DarkBackground>
    );
}

export default Menu;