import { useEffect } from "react";
import "App.css";
import Form from "components/Form";
import Header from "components/Header";
import { useTelegram } from "hooks/useTelegram";

function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg]);

  return (
    <div>
      <Header/>
      <Form />
    </div>
  );
}

export default App;
