import img from '../assets/investment-calculator-logo.png';

export default function Header() {
  return (
    <div id='header'>
      <img src={img} alt='logo' />
      <h1>Investment Calculator</h1>
    </div>
  );
}
