import { SignJWT, jwtVerify } from "jose";

// Secret key for JWT signing and verification
// In production, this should be stored in environment variables
const SECRET_KEY =
  process.env.JWT_SECRET || "your-secret-key-change-in-production";
const SECRET = new TextEncoder().encode(SECRET_KEY);

// Token expiration time (1 days)
const EXPIRATION_TIME = "1d";

/**
 * Generate a JWT token for authenticated access
 */
export async function generateToken(): Promise<string> {
  const token = await new SignJWT({ authenticated: true })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(EXPIRATION_TIME)
    .sign(SECRET);

  return token;
}

/**
 * Verify a JWT token
 * Returns true if token is valid, false otherwise
 */
export async function verifyToken(token: string): Promise<boolean> {
  try {
    await jwtVerify(token, SECRET);
    return true;
  } catch {
    return false;
  }
}

/**
 * Get token from localStorage
 */
export function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("niural_access_token");
}

/**
 * Save token to localStorage
 */
export function saveToken(token: string): void {
  if (typeof window === "undefined") return;
  localStorage.setItem("niural_access_token", token);
}

/**
 * Remove token from localStorage
 */
export function removeToken(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem("niural_access_token");
}
