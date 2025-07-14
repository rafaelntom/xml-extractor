import "./App.css";
import CustomInput from "./components/custom-input";

function App() {
  return (
    <main className="font-sans">
      <div className="h-screen bg-blue-900 flex flex-col items-center justify-center gap-2">
        <h1>Selecione o seu arquivo XML</h1>
        <CustomInput />
      </div>
    </main>
  );
}

export default App;
