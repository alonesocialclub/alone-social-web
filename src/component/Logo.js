import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    text-align: left;
    font-size: 3rem;
    font-weight: bold;
    line-height: 2rem;
`


const Logo = () => {
    return (
        <Wrapper>
            Alone <br/>
            Social <br/>
            Club <br/>
        </Wrapper>
    )
}

export default Logo;