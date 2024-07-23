const ProtectedElement = ({ Component }) => {
  const { state } = useUser();
  const location = useLocation();

  return state.isLoggedIn ? (
    Component
  ) : (
    <Navigate to={"/login"} state={{ from: location }} />
  );
};
