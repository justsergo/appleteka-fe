// import { useEffect } from "react";
import "App.css";
import Form from "components/form";
// import { useTelegram } from "hooks/useTelegram";

function App() {
  // const { onToggleButton, tg } = useTelegram();

  // useEffect(() => {
  //   tg.ready();
  // }, []);

  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
