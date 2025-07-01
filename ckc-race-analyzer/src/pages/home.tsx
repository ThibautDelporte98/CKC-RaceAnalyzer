import { RaceAnalyzer } from '../components/Analyzer/Analyzer';
import SEO from '../components/SEO/SEO';
import bg from '../assets/svg/dotbg.svg';
import MultiStepForm from '../components/MultiStepForm.js/MultistepForm';

const Home = () => {
  return (
    <div className="grid-container">
      <SEO
        title="CKC-RACE-ANALYZER"
        description=""
        keywords=""
        canonical="/home"
      />
      <div className="bg-fixed flex-colomn space-between">
        <div className="flex-row justify-end">
          <img className="bg" src={bg} alt={'BG'} />
        </div>
        <div className="flex-row justify-start">
          <img className="bg" src={bg} alt={'BG'} />
        </div>
      </div>
      <div className="bg-fixed flex-colomn space-between">
        <div className="flex-row justify-start">
        <h1>RACE ANALYZER 2025</h1>
        </div>
        <div className="flex-row justify-end">
        <h1>CREATED BY DELPDESIGN</h1>
        </div>
      </div>

      <MultiStepForm />
    </div>
  );
};

export default Home;
