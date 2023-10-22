import Banner from "./components/Banner";
import TermPage from "./components/TermPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useDbData } from "./utilities/firebase";
import Navigation from "./components/navigation";

const Main = () => {
  const [data, error] = useDbData("/");

  if (error) return <h1>Error loading Schedule data: {`${error}`}</h1>;
  if (!data) return <h1>Loading Schedule data...</h1>;

  return (
    <div>
      <Banner title={data.title} />
      <Navigation />
      <TermPage courses={data.courses} />
    </div>
  );
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <div className="container">
      <Main />
    </div>
  </QueryClientProvider>
);

export default App;
