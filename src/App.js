import Layout from "./hoc/Layout";
import StartPage from "./pages/StartPage/StartPage";
function App() {
  return (
    <div className="App">
      <Layout>
        <StartPage />
      </Layout>
    </div>
  )
}

export default App;
