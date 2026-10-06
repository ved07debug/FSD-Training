// import React from 'react'
// import Student1 from './component/Student1'
// import Student2 from './component/Student2'

// const App = () => {
//   return (
//     <div>
//       <h1>ABES COLLEGE!</h1>

//       <div
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           gap: "20px"
//         }}
//       >
//         <Student1
//           name="Zac Storm"
//           rollNo="27"
//           branch="CSE"
//         />

//         <Student2
//           name="John Doe"
//           rollNo="28"
//           branch="IT"
//         />
//       </div>

//     </div>
//   )
// }

// export default App

import {BrowserRouter,Routes,Route,link} from 'react-router-dom'
function Home(){
  return <h1>this is my home page</h1>

}

function About(){
  return <h1>this is my about page</h1>

}

function Phone(){
  return <h1>this is my phone page.</h1>

}


const App= () => {
  return (
    <BrowserRouter>

      <nav>
        <link to="/">Home </link>
        <link to="/about">About</link>
        <link to="/phone">Phone</link>

      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/phone" element={<Phone/>}/>
      </Routes>
    
    </BrowserRouter>
  )
}
export default App