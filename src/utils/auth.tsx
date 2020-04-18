// сделал быстро небольшую проверку, которую после можно масштабировать
export function isAuth(permissions?: string[]): boolean {
  if (permissions && permissions.includes('user')) {
    if (localStorage.getItem('token')) {
      return true
    }
    return false
  }
  return true
}
