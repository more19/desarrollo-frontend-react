import Logo from './Default/_components/Logo';
import Description from './Default/_components/Description';
//import Content from './Default/_components/Content';
//import Github from './Default/_components/Github';

import OpenLink from '../components/OpenLink';
//import LessonInfo from '../components/LessonInfo';

import Contador from './Default/_components/contador';

const Default =()=>{
    return (
        <div className="App">
          <header className="App-header">
            <Contador/>
            <Logo />
            <Description />
             {/*<LessonInfo numero="1" texto="Introduccion a react y estructura de proyecto"/>
            <LessonInfo numero="2" texto="Context API para la gestion del estado global en aplicaciones.react"/>  */}
            <OpenLink title="Learn React" url="https://react.dev/"/>
            <OpenLink title="Mi Proyecto React (GitHub)" url="https://github.com/more19/desarrollo-frontend-react"/>  

          </header>
        </div>
      );
}
export default Default;