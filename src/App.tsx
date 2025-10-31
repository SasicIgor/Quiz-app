import Quiz from "components/Quiz";
import Dialog from "components/Dialog";

function App() {
  return (
    <div className="grid grid-cols-[minmax(0,auto)_minmax(0,1200px)_minmax(0,auto)] gap-5 relative bg-radial from-sky-700 h-dvh pt-4">
      <div className="col-start-2">
        <Quiz />
      </div>
      <Dialog />
    </div>
  );
}

export default App;
