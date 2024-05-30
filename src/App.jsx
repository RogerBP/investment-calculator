import { useState } from 'react';
import Header from './components/Header';
import Results from './components/Results';
import UserInput from './components/UserInput';

const initialState = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [userInput, setUserInput] = useState(initialState);
  const isValid = userInput.duration >= 1;

  function handleChange(id, value) {
    setUserInput((cur) => {
      return {
        ...cur,
        [id]: value,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {isValid && <Results input={userInput} />}
      {!isValid && <div className='center'>Invalid Values</div>}
    </>
  );
}

export default App;
