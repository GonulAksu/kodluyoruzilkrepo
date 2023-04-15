import './App.css';
import Container from './Component/Container';
import { FormProvide } from './Context/FormContext';
import { WeatherProvider } from './Context/WeatherContext';


function App() {
  return (
    <>
      <FormProvide>
        <WeatherProvider>
          <Container></Container>
        </WeatherProvider>
      </FormProvide>
    </>
  );
}

export default App;
