import React from "react";

export interface HookProviderProps<Params> {
  params?: Params;
  children: React.ReactNode;
}
export type ContextHookProvider<State> = React.FC<HookProviderProps<State>>;

export type ContextHook<Value, Params> = [() => Value, ContextHookProvider<Params>];

const EMPTY: unique symbol = Symbol("__EMPTY__");

export const createContextHook = <Value, Params>(
  useHook: (params?: Params) => Value,
  errorMsg = "Hook must be wrapped with <Provider/>"
): ContextHook<Value, Params> => {
  const Context = React.createContext<Value | typeof EMPTY>(EMPTY);

  const Provider: ContextHookProvider<Params> = ({ params, children }) => {
    const value = useHook(params);
    return <Context.Provider value={value}>{children}</Context.Provider>;
  };

  const useContextHook = (): Value => {
    const value = React.useContext(Context);
    if (value === EMPTY) throw new Error(errorMsg);
    return value;
  };

  return [useContextHook, Provider];
};