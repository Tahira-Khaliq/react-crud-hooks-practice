import React from 'react'
import Layout from './layouts/Layout'
import { Counter } from './redux-counter/counter'
import Index from './routes/routes'
function App() {
  return (
    <>
   <Layout>
        <Index />
      </Layout>

      {/* <Counter/>  */}
     
    </>
  )
}

export default App
