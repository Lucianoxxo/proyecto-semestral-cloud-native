import { Injectable } from '@angular/core';
import { UserManager, User } from 'oidc-client-ts';
import { authConfig } from './auth.config';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private manager = new UserManager(authConfig as any);
  private current: User | null = null;

  constructor() {
    if(window.location.search.includes('code=')){
      this.completeLogin().then(() => {
        window.history.replaceState({},document.title, window.location.pathname);
      });
    } else{
      this.manager.getUser().then((user: User | null) => this.current = user);
    }
  }

  isLoggedIn(): boolean {
    return !!this.current && !this.current.expired;
  }

  token(): string | null {
    return this.current?.access_token ?? null;
  }

  roles(): string[] {
    const profile: any = this.current?.profile ?? {};
    const groups = profile['cognito:groups'];
    return Array.isArray(groups) ? groups : (groups ? [groups] : []);
  }

  async login(): Promise<void> {
    await this.manager.signinRedirect();
  }

  async completeLogin(): Promise<void> {
    this.current = await this.manager.signinRedirectCallback();
  }

  async logout(): Promise<void> {
  await this.manager.removeUser();

  const clientId = '7g1pk0kvuigi2ftb3bq3f18u5n';
  const logoutUri = 'http://localhost:4200/';
  const cognitoDomain =
    'https://us-east-1vuvx3pv5a.auth.us-east-1.amazoncognito.com';

  window.location.href =
    `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  }
}