import React from "react"

import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"

function App() {
    return(
        <div>
            <Header 
              name = "Sally Student"
            />
            <MainContent 
              name = "Sally Student"
              email = "sally@student.com"
              emailUrl = "mailto:sally@student.com"
              number = "555-555-5555"
              numberUrl = "tel:555-555-5555"

            />
            <Footer />
        </div>
    )
}

export default App