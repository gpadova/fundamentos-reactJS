import styled from "styled-components";

export const Consts = styled.div`
  --gray-700: #0d0d0d;
  --gray-600: #1a1a1a;
  --gray-500: #262626;
  --gray-400: #333333;
  --gray-300: #808080;
  --gray-200: #d9d9d9;
  --gray-100: #f2f2f2;
  --blue-dark: #1e6f9f;
  --blue: #4ea8de;
  --purple-dark: #5e60ce;
  --purple: #8284fa;
  --danger: #e25858;
`;

export const Wrapper = styled.div`
  width: 100vw;
  background-color: var(--gray-700);
  .title-wrapper {
    display: flex;
    align-items: center;
    height: 48px;
    gap: 12px;
  }
  .header {
    width: 100%;
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      font-family: Inter;
      font-size: 40px;
      font-weight: 700;
      color: var(--blue);
    }
    .do {
      color: var(--purple);
    }
  }
  .content {
  }
`;