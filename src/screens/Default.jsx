import Logo from '../components/Logo';
import Description from '../components/Description';
import Content from '../components/Content';
import Github from '../components/Github';

const Default =()=>{
    return (
        <div className="App">
          <header className="App-header">
            <Logo />
            <Description />
            <Content />
            <Github />
          </header>
        </div>
      );
}
export default Default;