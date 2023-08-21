import { Modal } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import CallBack from "./pages/callback"
import ErrorPage from "./pages/error/error"
import IndexPage from "./pages/index"
import MockImportPage from "./pages/mock/MockImportPage"
import VoteSuccessPage from "./pages/success/success"
import TopicPage from "./pages/topics/topic"
import TopicsPage from "./pages/topics/topics"
import { onClose } from "./redux/features/modalSlice"
import { RootState } from "./redux/store"
import ProtectedRoute from "./utils/ProtectedRoute"

function App() {
  const { isOpen, children } = useSelector((state: RootState) => state.modal)
  const dispatch = useDispatch();


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/topics" >
            <Route index element={<ProtectedRoute><TopicsPage /></ProtectedRoute>} />
            <Route path=":topicId" element={<ProtectedRoute><TopicPage /></ProtectedRoute>} />
          </Route>
          <Route path="callback" element={<CallBack />} />
          <Route path="backoffice">
            <Route index element={<div>Backoffice</div>} />
          </Route>
          <Route path="success" element={<ProtectedRoute><VoteSuccessPage /></ProtectedRoute>} />
          <Route path="mockImport" element={<ProtectedRoute><MockImportPage /></ProtectedRoute>} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Modal isOpen={isOpen} onClose={() => dispatch(onClose())} size={{ base: "full", md: "lg" }} isCentered>
          {children}
        </Modal>
      </BrowserRouter>
    </>
  )
}

export default App
