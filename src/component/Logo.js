import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.a`
    text-align: left;
    font-size: 3rem;
    font-weight: bold;
    line-height: 3.5rem;
    text-decoration: none;
    color: black;
`


const Logo = () => {
    return (
        <Wrapper href={'/'}>
            Alone <br/>
            Social <br/>
            Club <br/>
        </Wrapper>

    )
}

export default Logo;