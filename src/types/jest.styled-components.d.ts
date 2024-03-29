import { Plugin, NewPlugin } from 'pretty-format'

declare global {
  namespace jest {
    interface AsymmetricMatcher {
      $$typeof: symbol
      // eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-explicit-any
      sample?: string | RegExp | object | Array<any> | Function
    }
    type Value = string | number | undefined | RegExp | AsymmetricMatcher

    interface Options {
      media?: string
      modifier?: string
      supports?: string
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<R, T> {
      toHaveStyleRule(property: string, value?: Value, options?: Options): R
    }
  }
}

export declare const styleSheetSerializer: Exclude<Plugin, NewPlugin>
