import React, { useEffect } from "react";
import HeaderTop from "../components/HeaderTop";
import Header from "../components/Header";
import Layout from "./Layout";



// export default function ErrorBoundary({ children, HandelTheme }) {
//   const [theme, setTheme] = useState("");
//   useEffect(() => {
//     if (HandelTheme) {
//       HandelTheme(theme);
//     }
//   }, [theme]);
//   return (
//     <>
//       <Header setTheme={setTheme} />
//       {children}
//     </>
//   );
// }

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    // Define a state variable to track whether is an error or not
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    // You can use your own error logging service here
    console.log({ error, errorInfo });
  }
  
  componentDidMount() {
    console.log("component B mounted");
  }
  
  render() {
    if (this.state.hasError) {
      return (
        <>
        {/* <HeaderTop/> */}
          {/* <Header/> */}
          <Layout fromError={true}>

          <div className="error-main">
            <div className="error-body">
              <h1>
                <span className="error-text">Oops! </span>
              </h1>
              <h2> there is an error</h2>
              <button
                type="button"
                onClick={() => this.setState({ hasError: false })}
              >
                Try again?
              </button>
            </div>
          </div>
          </Layout>

          <style jsx>{`
            .error-main {
              position: fixed;
              top: 0;
              bottom: 0;
              right: 0;
              left: 0;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .error-body {
              text-align: center;
            }
            .error-body h2 {
              color: #595959;
            }
            .error-body button {
              margin-top: 58px;
              padding: 10px 25px;
              border: none;
              background: #f55;
              color: #fff;
              cursor: pointer;
              font-size: 14px;
            }
            .error-text {
              color: #f55;
              font-size: 84px;
            }
          `}</style>
        </>
      );
    }

    // Return children components in case of no error

    return this.props.children;
  }
}

export default ErrorBoundary;
