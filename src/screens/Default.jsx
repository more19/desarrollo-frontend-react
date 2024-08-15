import Logo from './_components/Logo';
import Description from './_components/Description';
//import Content from './_components/Content';
//import Github from './_components/Github';

import OpenLink from '../components/OpenLink';
import LessonInfo from '../components/LessonInfo';

const Default =()=>{
    return (
        <div className="App">
          <header className="App-header">
            <Logo />
            <Description />
            <LessonInfo numero="1" texto="Introduccion a react y estructura de proyecto"/>
            <LessonInfo numero="2" texto="Context API para la gestion del estado global en aplicaciones.react"/>
            <OpenLink title="Learn React" url="https://react.dev/"/>
            <OpenLink title="Mi Proyecto React (GitHub)" url="https://github.com/more19/desarrollo-frontend-react"/>  

          </header>
        </div>
      );
}
export default Default;