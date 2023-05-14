export default function LoadMoreButton({ children }) {
  return (
    <>
      <button>{children}</button>
      <style jsx>{`
        button {
          background: transparent;
          color: #f0b90c;
          border: 1px solid #f0b90c;
          padding: 12px 30px;
          border-radius: 5px;
          font-size: 16px;
          font-weight: 500;
          display: block;
          margin: auto;
          cursor: pointer;
          margin-top: 30px;
        }
        button:hover {
          background-color: #f0b90c1f;
        }
      `}</style>
    </>
  );
}
