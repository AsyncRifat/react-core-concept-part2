import { useState } from 'react';

export default function Batsman() {
  const [runs, setRuns] = useState(0);
  let [sixes, setSixes] = useState(0);

  const handleSingles = () => {
    const updateRuns = runs + 1;
    setRuns(updateRuns);
  };

  const handleFour = () => {
    const updatedRun = runs + 4;
    setRuns(updatedRun);
  };

  const handleSix = () => {
    const updatedSix = runs + 6;
    setRuns(updatedSix);
    const totalSixes = sixes + 1;
    setSixes(totalSixes);
  };
  const handleTarget = () => {
    const target = runs;
    setRuns(target)
  };

  return (
    <div
      style={{
        border: '1.5px solid green',
        marginTop: '10px',
        borderRadius: '15px',
        padding: '8px',
      }}
    >
      <h2>Bangladeshi Player</h2>
      {runs > 50 && <p>Your score: Fifty</p>}
      <h3>Score:{runs}</h3>
      <p>Six: {sixes}</p>
      <p>Target:{runs}</p>
      <button onClick={handleSingles}>1</button>
      <button onClick={handleFour}>4</button>
      <button onClick={handleSix}>6</button>
      <button onClick={handleTarget}>Target</button>
    </div>
  );
}
