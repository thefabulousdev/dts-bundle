// Generated by dts-bundle v0.1.1

declare module 'foo-mx' {
    import exp = require('__foo-mx/lib/exported-sub');
    import mod1 = require('__foo-mx/index/__/external1');
    export import Foo = require('__foo-mx/Foo');
    export function run(foo?: Foo): Foo;
    export function flep(): exp.ExternalContainer;
    export function bar(): mod1.SomeType;
}

declare module '__foo-mx/index/__/external1' {
    export class SomeType {
        foo(): void;
    }
}

declare module '__foo-mx/index/__/external2' {
    export class AnotherType {
        foo(): void;
    }
}

declare module '__foo-mx/Foo' {
    class Foo {
        foo: string;
        constructor(secret?: string);
    }
    export = Foo;
}

