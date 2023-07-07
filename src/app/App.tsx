import LinearProgress from "@mui/material/LinearProgress";
import { useAppSelector } from "common/hooks";
import {selectApp, selectIsLoading} from "./appSelectors";

function App() {
  const isLoading = useAppSelector(selectApp.selectIsLoading);
  const isAppInitialized = useAppSelector(selectApp.selectIsAppInitialized);

  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   setTimeout(() => {
  //     dispatch(appActions.setIsLoading({ isLoading: false }));
  //   }, 3000);
  // }, []);

  return <div className="App">{isLoading && <LinearProgress />}</div>;
}

export default App;
