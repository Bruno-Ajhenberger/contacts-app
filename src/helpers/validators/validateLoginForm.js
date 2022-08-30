export const validateLoginForm = (formData) => {
  const { userName, password } = formData;
  if (!userName || !password || userName.length < 4 || password.length < 6)
    return true;

  return false;
};
