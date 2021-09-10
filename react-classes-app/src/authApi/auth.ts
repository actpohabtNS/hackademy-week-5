export default function isAuthenticated() {
    return localStorage.getItem("login") && localStorage.getItem("password");
}

export function signUp(login: string, password: string): void {
  localStorage.setItem("login", login);
  localStorage.setItem("password", password);
}

export function signOut(): void {
  localStorage.removeItem("login");
  localStorage.removeItem("password");
}