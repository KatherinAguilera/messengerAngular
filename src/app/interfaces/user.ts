export interface User {
  nick: string,
  // ?: que no se un campo obligatorio
  subnick?: string,
  age?: number,
  email: string,
  friend: boolean,
  uid: any,
  status?: string,
  
}