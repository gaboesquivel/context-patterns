# React Context Demo

This repo demonstrates different patterns for react context.

**GlobalContext**

this one uses only native react functions and accepts and the provider can take an initial partial value that gets merged with initial default value.
the downside of this approach is that requires a lot typescript definitions and explicity context definition.

**CleanContext**

this context is my preffered one, it leverages a utility from easily creating a context from a hook function and all types are inferred. It's super clean!.

**Sharing logic**

with both approches you can encapsulate logic on the provider using simple functions without needing reducers.

**Context as Store Approach**

the utilty hook useSetState allows you define a state object and update it partially. this allow you to scape the useState hell and keeps your code more tidy.

the setter function gets exposed thru the context provider so you can alter state directly on the component without having to define setters and complex logic on the provider, keeping it smaller. this approach helps when reading code as you can see how the state is update directly on the component thats modifying it without needing to switch over, if there's any dependency it can be managed there.

**ReducerContext**

Reducers are totally fine, it all depends on each use case, and they can be used in combination with utilities and strategies demostrated here.
Downsides are more verbosity and losing the ability to go directly do definition if the reducer is has too many actions.

