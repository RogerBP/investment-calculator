export default function UserInput({ onChange, userInput }) {
  return (
    <section id='user-input'>
      <div className='input-group'>
        <p>
          <label>Initial investment</label>
          <input
            type='number'
            required
            value={userInput.initialInvestment}
            onChange={(e) =>
              onChange('initialInvestment', Number(e.target.value))
            }
          />
        </p>
        <p>
          <label>Annual investment</label>
          <input
            type='number'
            required
            value={userInput.annualInvestment}
            onChange={(e) =>
              onChange('annualInvestment', Number(e.target.value))
            }
          />
        </p>
      </div>
      <div className='input-group'>
        <p>
          <label>Expected return</label>
          <input
            type='number'
            required
            value={userInput.expectedReturn}
            onChange={(e) => {
              console.log(e);
              onChange('expectedReturn', Number(e.target.value));
            }}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type='number'
            required
            value={userInput.duration}
            onChange={(e) => onChange('duration', Number(e.target.value))}
          />
        </p>
      </div>
    </section>
  );
}
