import Advantages from '../components/advantages/Advantages';
import Feedback from '../components/feedback/Feedback';
import GetGift from '../components/getGift/GetGift';
import Hero from '../components/hero/Hero';
import HowWeWork from '../components/howWeWork/HowWeWork';
import Reviews from '../components/Reviews/Reviews';
import WorkExamples from '../components/workExamples/WorkExamples';


const MainPage = () => {
  return (
    <main>
      <Hero/>
      <Advantages/>
      <GetGift/>
      <WorkExamples/>
      <Reviews/>
      <HowWeWork/>
      <Feedback/>
    </main>
  )
}

export default MainPage;