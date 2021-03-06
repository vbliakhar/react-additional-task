import "./App.css";
import ColorPicker from "./Components/ColorPicker";
const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3D51B5" },
];
function App() {
  return (
    <div className="App">
      <ColorPicker options={colorPickerOptions} title={"Color Picker"} />
    </div>
  );
}

export default App;
