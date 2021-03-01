import { QueryClient, QueryClientProvider } from "react-query";
import Form from "./Form";
import Meme from "./Meme";

const qc = new QueryClient();

const formHandler = (event) => {
  console.log(event);
};

const Main = () => (
  <main>
    <QueryClientProvider client={qc}>
      <div className="flex m-4">
        <Form submitHandler={formHandler} />
        <Meme />
      </div>
    </QueryClientProvider>
  </main>
);

export default Main;
