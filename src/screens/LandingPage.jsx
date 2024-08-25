import Title from './LandingPage/title';
import Section from './LandingPage/section';
import Footer from './LandingPage/footer';

const LandingPage = () => {
  return (
    <div className="landing">
      <div className="container-landing">
        <Title />
        <Section sectionTitle="Bienvenido" />
        <Section sectionTitle="Temas Cubiertos" />
        <Section sectionTitle="Recursos Adicionales" />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;