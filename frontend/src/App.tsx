import { FirebaseUIProvider } from "@firebase-oss/ui-react";
import { ui } from "./lib/firebase";

function App() {
  return (
    <>
      <h1>Microscopia Digital</h1>

      <p>Entre pelo gmail:</p>

      <FirebaseUIProvider ui={ui}>
        <></>
      </FirebaseUIProvider>
    </>
  );
}

export default App;
