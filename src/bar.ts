import type {Foo} from './foo';

let instance: Foo;

// This call expression makes the `noFloatingPromises` rule work.
instance.doSomething();
