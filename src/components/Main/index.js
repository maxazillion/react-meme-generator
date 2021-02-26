import { QueryClient, QueryClientProvider } from "react-query";
import Form from "./Form";
import Meme from "./Meme";

const qc = new QueryClient();

const Main = () => (
  <main>
    <QueryClientProvider client={qc}>
      <Meme />
      <Form />
    </QueryClientProvider>
  </main>
);

export default Main;
