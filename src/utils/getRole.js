export const getRole = () => {
  const params = new URLSearchParams(window.location.search);
  return params.get("role");
};