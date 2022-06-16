import { useDispatch } from "react-redux";

export default function useHook() {
  // const { user } = useSelector(state => state);
  const dispatch = useDispatch();
  const toggleUser = (status, role,connected) => {
    dispatch({ type: "SET_ROLE", payload: role });
    dispatch({ type: "SET_USER", payload: status });
    dispatch({ type: "SET_CONNECTED", payload: connected });
  };
  return {
    toggleUser
  };
}
