export function decodeToken(token) {
  try {
    const payload = token.split(".")[1];

    // JWT payload is base64url encoded
    const base64 = payload.replace(/-/g, "+").replace(/_/g, "/");

    // Fix padding
    const padded =
      base64 + "=".repeat((4 - (base64.length % 4)) % 4);

    return JSON.parse(atob(padded));
  } catch {
    return null;
  }
}
