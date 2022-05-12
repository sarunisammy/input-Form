import InputForm from "./components/InputForm";

function App() {
  return (
    <div>
      <h1
        style={{
          direction: "flex",
          color: "black",
          fontFamily: "sans-serif",
          textAlign: "center",
        }}
      >
        my form
      </h1>{" "}
      <InputForm />
    </div>
  );
}

export default App;
