import Layout from "./hoc/Layout";
import GamePage from "./pages/GamePage/GamePage";
import StartPage from "./pages/StartPage/StartPage";
function App() {
  return (
    <div className="App">
      <Layout>
        {/* <StartPage /> */}
        <GamePage />
      </Layout>
    </div>
  )
}

export default App;
