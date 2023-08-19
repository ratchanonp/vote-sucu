import { BrowserRouter, Route, Routes } from "react-router-dom"
import CallBack from "./pages/callback"
import IndexPage from "./pages/index"
import TopicPage from "./pages/topic"
import TopicsPage from "./pages/topics"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/topics" >
          <Route index element={<TopicsPage />} />
          <Route path=":topicId" element={<TopicPage />} />
        </Route>
        <Route path="callback" element={<CallBack />} />
        <Route path="backoffice">
          <Route index element={<div>Backoffice</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
