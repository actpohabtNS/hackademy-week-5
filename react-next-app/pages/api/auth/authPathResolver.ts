import Router from 'next/router'

export default function authPathResolver(isAuth: boolean, redirectTo: string): void {
  if (!isAuth) {
    Router.push(redirectTo);
  }
}