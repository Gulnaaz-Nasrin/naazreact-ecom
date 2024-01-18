import React from 'react';
import styled from 'styled-components';

function Home() {
    return (
        <React.Fragment>
            <Wrapper className='test' >
                HOME
            </Wrapper>

        </React.Fragment>
    )
};

const Wrapper = styled.section`
    background-color:${({ theme }) => theme.colors.bg};
`

export default Home;                