import LinearProgress from "@mui/material/LinearProgress";
import { useAppSelector } from "common/hooks";

function App() {
  const isLoading = useAppSelector((state) => state.app.isLoading);

  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   setTimeout(() => {
  //     dispatch(appActions.setIsLoading({ isLoading: false }));
  //   }, 3000);
  // }, []);

  return <div className="App">{isLoading && <LinearProgress />}</div>;
}

export default App;
