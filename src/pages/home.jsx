import FirstPage from './firstPage.jsx'
import SecondPage from './secPage.jsx'
import ThirdPage from './thirdPage.jsx'
import FourthPage from './fourthPage.jsx'
import FifthPage from './fifthPage.jsx'

function Home() {
  return (
    <>
      <div id="home"><FirstPage /></div>
      <div id="aboutme"><SecondPage /></div>
      <ThirdPage />
      <div id="projects"><FourthPage /></div>
      <div id="contact"><FifthPage /></div>
    </>
  )
}

export default Home