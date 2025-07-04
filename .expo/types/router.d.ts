/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/home/home`; params?: Router.UnknownInputParams; } | { pathname: `/login/login`; params?: Router.UnknownInputParams; } | { pathname: `/signup/signup`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/home/home`; params?: Router.UnknownOutputParams; } | { pathname: `/login/login`; params?: Router.UnknownOutputParams; } | { pathname: `/signup/signup`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `/home/home${`?${string}` | `#${string}` | ''}` | `/login/login${`?${string}` | `#${string}` | ''}` | `/signup/signup${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/home/home`; params?: Router.UnknownInputParams; } | { pathname: `/login/login`; params?: Router.UnknownInputParams; } | { pathname: `/signup/signup`; params?: Router.UnknownInputParams; };
    }
  }
}
