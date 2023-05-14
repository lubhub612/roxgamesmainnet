import styled from 'styled-components';

export const Area = styled.div`
  .horse-page-feed {
    margin: 60px 0;
    h1 {
      text-align: center;
      margin-bottom: 50px;
      text-transform: uppercase;
      font-size: 50px;
      color: var(--horseColor);
    }
    p {
      font-size: 16px;
      margin-bottom: 20px;
      color: var(--horseColor);
      text-align: center;
      line-height: 1.8;
    }
  }

  .info-horse-list {
    background: var(--BgHorse);
    margin: 100px 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 50px;
    text-align: left;
    gap: 60px;
    @media screen and (max-width: 991px) {
      grid-template-columns: 1fr;
      gap: 20px;
    }
    p {
      color: var(--horseColor);
      text-align: left;
    }
  }
  .info-horse-item h2 {
    color: #e7b209;
    font-size: 26px;
  }
  .info-horse-item select {
    width: 100%;
    padding: 15px;
    margin-bottom: 30px;
    background: transparent;
    border: 1px solid var(--horseColor);
  }

  .info-horse-item h3 {
    margin-bottom: 10px;
  }

  .info-horse-item button {
    width: 100%;
    padding: 18px;
    font-size: 16px;
    font-weight: 700;
    background: linear-gradient(90deg, #f0b90b, #8a6900);
    border-radius: 8px;
    color: #fff;
    cursor: pointer;
    border: none;
  }
`;
