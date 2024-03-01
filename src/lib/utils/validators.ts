export function validateEmail(email: string) {
  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  if (!isValidEmail) return "Invalid email address";
}

export function validatePassword(password: string) {
  const isEightCharsOrMoreLong = password.length >= 8;
  if (!isEightCharsOrMoreLong)
    return "Password should be at least 8 characters long";

  const hasUpperCaseLetter = /[A-Z]/.test(password);
  if (!hasUpperCaseLetter)
    return "Password should contain at least one uppercase letter";

  const hasLowerCaseLetter = /[a-z]/.test(password);
  if (!hasLowerCaseLetter)
    return "Password should contain at least one lowercase letter";

  const hasNumber = /\d/.test(password);
  if (!hasNumber) return "Password should contain at least one number";

  const hasSpecialChar = /[^A-Za-z0-9]/.test(password);
  if (!hasSpecialChar)
    return "Password should contain at least one special character";
}
