import { render } from "solid-js/web";
import "./index.css";

function App() {
  return (
    <div class="flex flex-col items-center justify-center h-screen">
      <h1 class="text-4xl">Hello World</h1>
      <p>This is a test for testing automatic deployment</p>
      <li>
        <p>first test for `webhook` checking</p>
      </li>
      <li>
        <p>perfect. i can see it now. but just with simple request</p>
      </li>
    </div>
  );
}

render(() => <App />, document.getElementById("root")!);
