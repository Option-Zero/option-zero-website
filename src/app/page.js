'use client';
import styled from '@emotion/styled'

const StyledMain = styled.button`
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`

export default function Home() {
  return (
    <StyledMain>
      <div>
        Hello world
      </div>
    </StyledMain>
  );
}
