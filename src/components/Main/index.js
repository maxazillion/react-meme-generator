import { TextContext } from "context";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Form from "./Form";
import Meme from "./Meme";

const qc = new QueryClient();

const Main = () => {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");

  const formHandler = (event) => {
    event.preventDefault();
    setBottomText(() => event.target.elements[1].value);
    setTopText(() => event.target.elements[0].value);
  };

  return (
    <main>
      <QueryClientProvider client={qc}>
        <div className="flex m-4">
          <TextContext.Provider value={{ topText, bottomText }}>
            <Form submitHandler={formHandler} />
            <Meme />
          </TextContext.Provider>
        </div>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </main>
  );
};

export default Main;
