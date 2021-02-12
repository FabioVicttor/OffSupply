import styled from "styled-components";

export const ContentNavbar = styled.div`
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100%;
  position: fixed;
  background-color: rgba(
    255,
    255,
    255,
    ${({ scrollposition }) => scrollposition / 200}
  );
  box-shadow: rgba(0, 0, 0, ${({ scrollposition }) => scrollposition / 200}) 0px
    1px 5px 0px;
`;

export const ContentNavbarIcon = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  /* position: fixed; */
  margin-top: ${({ largura, scrollposition }) =>
    largura > 720 ? (scrollposition > 0 ? "0px" : "15px") : "0px"};
  height: 100px;
  width: ${({ scrollposition, largura }) =>
    scrollposition > 0 ? "250px" : largura > 720 ? "450px" : "250px"};
  transition-duration: 500ms;
`;

export const ItemNavbar = styled.div`
  height: 100px;
  /* z-index: 10; */

  /* padding: 5px; */
  /* justify-content: center;
  transition: transform 0s ease-in-out; */

  :hover {
    svg {
      cursor: pointer;
      height: 110px;
      width: 110px;
      transition-duration: 500ms;
    }
  }

  :active {
    svg {
      cursor: pointer;
      height: 100px;
      width: 100px;
    }
  }
`;
