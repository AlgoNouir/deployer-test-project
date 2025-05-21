import { render } from "solid-js/web";
import "./index.css";

function App() {
  return (
    <div class="flex flex-col items-center justify-center h-screen">
      <h1>HELLO WORLD</h1>
    </div>
  );
}

render(() => <App />, document.getElementById("root")!);
