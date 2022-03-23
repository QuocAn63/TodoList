import Home from './components/Home'
import Insert from './components/Insert'
import Layout from './components/Layout'

function App() {
  return (
    <Layout>
      <div className="App mt-4">
        <div className="container">
          <Insert/>
        </div>
      </div>
    </Layout>
  );
}

export default App;
