import ContentList from "./contentList";
import OpenLink from "../../components/OpenLink";

const Section = ({ sectionTitle }) => {
  return (
    <div>
      <div className="section-landing">
        <h2>{sectionTitle}</h2>
      </div>
      <div>
        {sectionTitle === 'Bienvenido' ? (
          <p>
            Este módulo se centra en el uso de <strong>React</strong>,
            incluyendo la creación de <strong>componentes</strong>, el manejo de{' '}
            <strong>hooks</strong>, y el uso de <strong>Redux</strong>.
          </p>
        ) : null}
        {sectionTitle === 'Recursos Adicionales' ? (
        <div>
          <p>
            Para profundizar en los temas cubiertos, consulta los siguientes
            recursos:
          </p>
          <OpenLink title="Learn React" url="https://react.dev/"/>
          <OpenLink title="Framer Motion" url="https://www.framer.com/motion/"/>
          </div>
        ) : null}
        {sectionTitle === 'Temas Cubiertos' ? (
          <ContentList/>
        ) : null}
      </div>
    </div>
  );
};

export default Section;
