import logo from '../../../logo.svg'
import { useSelector } from "react-redux";

const Logo = () => {
    const defaultState = useSelector(state => state.formData);
    return (
        <>
            <h3>Componente Logo</h3>
            <img src={logo} className="App-logo" alt="logo" />
            {/*<h4>{defaultState.name}</h4>*/}
            <h4>Hola al Default</h4>
        </>
    );
};

export default Logo;