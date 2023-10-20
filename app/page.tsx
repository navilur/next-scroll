"use client";
import styled from "styled-components";
import Header from "./Components/Header/Header";
import SectionLayout from "./Components/SectionLayout";

export default function Home() {
  return (
    <>
      <Header />
      <MainStyled>
        <SectionLayout>
          <h1>Section1</h1>
        </SectionLayout>
      </MainStyled>
    </>
  );
}

const MainStyled = styled.main`
  min-height: 100vh;
  width: 100%;
`;
