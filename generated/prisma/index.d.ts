
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Mesa
 * 
 */
export type Mesa = $Result.DefaultSelection<Prisma.$MesaPayload>
/**
 * Model Reservacion
 * 
 */
export type Reservacion = $Result.DefaultSelection<Prisma.$ReservacionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Rol: {
  cliente: 'cliente',
  admin: 'admin'
};

export type Rol = (typeof Rol)[keyof typeof Rol]


export const Estado: {
  pendiente: 'pendiente',
  confirmada: 'confirmada',
  cancelada: 'cancelada'
};

export type Estado = (typeof Estado)[keyof typeof Estado]

}

export type Rol = $Enums.Rol

export const Rol: typeof $Enums.Rol

export type Estado = $Enums.Estado

export const Estado: typeof $Enums.Estado

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mesa`: Exposes CRUD operations for the **Mesa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mesas
    * const mesas = await prisma.mesa.findMany()
    * ```
    */
  get mesa(): Prisma.MesaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reservacion`: Exposes CRUD operations for the **Reservacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservacions
    * const reservacions = await prisma.reservacion.findMany()
    * ```
    */
  get reservacion(): Prisma.ReservacionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuario: 'Usuario',
    Mesa: 'Mesa',
    Reservacion: 'Reservacion'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "mesa" | "reservacion"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Mesa: {
        payload: Prisma.$MesaPayload<ExtArgs>
        fields: Prisma.MesaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MesaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MesaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesaPayload>
          }
          findFirst: {
            args: Prisma.MesaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MesaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesaPayload>
          }
          findMany: {
            args: Prisma.MesaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesaPayload>[]
          }
          create: {
            args: Prisma.MesaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesaPayload>
          }
          createMany: {
            args: Prisma.MesaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MesaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesaPayload>[]
          }
          delete: {
            args: Prisma.MesaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesaPayload>
          }
          update: {
            args: Prisma.MesaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesaPayload>
          }
          deleteMany: {
            args: Prisma.MesaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MesaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MesaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesaPayload>[]
          }
          upsert: {
            args: Prisma.MesaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesaPayload>
          }
          aggregate: {
            args: Prisma.MesaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMesa>
          }
          groupBy: {
            args: Prisma.MesaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MesaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MesaCountArgs<ExtArgs>
            result: $Utils.Optional<MesaCountAggregateOutputType> | number
          }
        }
      }
      Reservacion: {
        payload: Prisma.$ReservacionPayload<ExtArgs>
        fields: Prisma.ReservacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservacionPayload>
          }
          findFirst: {
            args: Prisma.ReservacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservacionPayload>
          }
          findMany: {
            args: Prisma.ReservacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservacionPayload>[]
          }
          create: {
            args: Prisma.ReservacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservacionPayload>
          }
          createMany: {
            args: Prisma.ReservacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReservacionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservacionPayload>[]
          }
          delete: {
            args: Prisma.ReservacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservacionPayload>
          }
          update: {
            args: Prisma.ReservacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservacionPayload>
          }
          deleteMany: {
            args: Prisma.ReservacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReservacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReservacionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservacionPayload>[]
          }
          upsert: {
            args: Prisma.ReservacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservacionPayload>
          }
          aggregate: {
            args: Prisma.ReservacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReservacion>
          }
          groupBy: {
            args: Prisma.ReservacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservacionCountArgs<ExtArgs>
            result: $Utils.Optional<ReservacionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    mesa?: MesaOmit
    reservacion?: ReservacionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    reservaciones: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservaciones?: boolean | UsuarioCountOutputTypeCountReservacionesArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountReservacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservacionWhereInput
  }


  /**
   * Count Type MesaCountOutputType
   */

  export type MesaCountOutputType = {
    reservaciones: number
  }

  export type MesaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservaciones?: boolean | MesaCountOutputTypeCountReservacionesArgs
  }

  // Custom InputTypes
  /**
   * MesaCountOutputType without action
   */
  export type MesaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MesaCountOutputType
     */
    select?: MesaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MesaCountOutputType without action
   */
  export type MesaCountOutputTypeCountReservacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservacionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    correo: string | null
    password: string | null
    rol: $Enums.Rol | null
    createdAt: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    correo: string | null
    password: string | null
    rol: $Enums.Rol | null
    createdAt: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nombre: number
    correo: number
    password: number
    rol: number
    createdAt: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nombre?: true
    correo?: true
    password?: true
    rol?: true
    createdAt?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nombre?: true
    correo?: true
    password?: true
    rol?: true
    createdAt?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nombre?: true
    correo?: true
    password?: true
    rol?: true
    createdAt?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nombre: string
    correo: string
    password: string
    rol: $Enums.Rol
    createdAt: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    correo?: boolean
    password?: boolean
    rol?: boolean
    createdAt?: boolean
    reservaciones?: boolean | Usuario$reservacionesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    correo?: boolean
    password?: boolean
    rol?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    correo?: boolean
    password?: boolean
    rol?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nombre?: boolean
    correo?: boolean
    password?: boolean
    rol?: boolean
    createdAt?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "correo" | "password" | "rol" | "createdAt", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservaciones?: boolean | Usuario$reservacionesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      reservaciones: Prisma.$ReservacionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      correo: string
      password: string
      rol: $Enums.Rol
      createdAt: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservaciones<T extends Usuario$reservacionesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$reservacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly correo: FieldRef<"Usuario", 'String'>
    readonly password: FieldRef<"Usuario", 'String'>
    readonly rol: FieldRef<"Usuario", 'Rol'>
    readonly createdAt: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.reservaciones
   */
  export type Usuario$reservacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservacion
     */
    select?: ReservacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservacion
     */
    omit?: ReservacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservacionInclude<ExtArgs> | null
    where?: ReservacionWhereInput
    orderBy?: ReservacionOrderByWithRelationInput | ReservacionOrderByWithRelationInput[]
    cursor?: ReservacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservacionScalarFieldEnum | ReservacionScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Mesa
   */

  export type AggregateMesa = {
    _count: MesaCountAggregateOutputType | null
    _avg: MesaAvgAggregateOutputType | null
    _sum: MesaSumAggregateOutputType | null
    _min: MesaMinAggregateOutputType | null
    _max: MesaMaxAggregateOutputType | null
  }

  export type MesaAvgAggregateOutputType = {
    id: number | null
    numero: number | null
    capacidad: number | null
  }

  export type MesaSumAggregateOutputType = {
    id: number | null
    numero: number | null
    capacidad: number | null
  }

  export type MesaMinAggregateOutputType = {
    id: number | null
    numero: number | null
    capacidad: number | null
    disponible: boolean | null
    createdAt: Date | null
  }

  export type MesaMaxAggregateOutputType = {
    id: number | null
    numero: number | null
    capacidad: number | null
    disponible: boolean | null
    createdAt: Date | null
  }

  export type MesaCountAggregateOutputType = {
    id: number
    numero: number
    capacidad: number
    disponible: number
    createdAt: number
    _all: number
  }


  export type MesaAvgAggregateInputType = {
    id?: true
    numero?: true
    capacidad?: true
  }

  export type MesaSumAggregateInputType = {
    id?: true
    numero?: true
    capacidad?: true
  }

  export type MesaMinAggregateInputType = {
    id?: true
    numero?: true
    capacidad?: true
    disponible?: true
    createdAt?: true
  }

  export type MesaMaxAggregateInputType = {
    id?: true
    numero?: true
    capacidad?: true
    disponible?: true
    createdAt?: true
  }

  export type MesaCountAggregateInputType = {
    id?: true
    numero?: true
    capacidad?: true
    disponible?: true
    createdAt?: true
    _all?: true
  }

  export type MesaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mesa to aggregate.
     */
    where?: MesaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mesas to fetch.
     */
    orderBy?: MesaOrderByWithRelationInput | MesaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MesaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mesas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mesas
    **/
    _count?: true | MesaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MesaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MesaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MesaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MesaMaxAggregateInputType
  }

  export type GetMesaAggregateType<T extends MesaAggregateArgs> = {
        [P in keyof T & keyof AggregateMesa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMesa[P]>
      : GetScalarType<T[P], AggregateMesa[P]>
  }




  export type MesaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MesaWhereInput
    orderBy?: MesaOrderByWithAggregationInput | MesaOrderByWithAggregationInput[]
    by: MesaScalarFieldEnum[] | MesaScalarFieldEnum
    having?: MesaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MesaCountAggregateInputType | true
    _avg?: MesaAvgAggregateInputType
    _sum?: MesaSumAggregateInputType
    _min?: MesaMinAggregateInputType
    _max?: MesaMaxAggregateInputType
  }

  export type MesaGroupByOutputType = {
    id: number
    numero: number
    capacidad: number
    disponible: boolean
    createdAt: Date
    _count: MesaCountAggregateOutputType | null
    _avg: MesaAvgAggregateOutputType | null
    _sum: MesaSumAggregateOutputType | null
    _min: MesaMinAggregateOutputType | null
    _max: MesaMaxAggregateOutputType | null
  }

  type GetMesaGroupByPayload<T extends MesaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MesaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MesaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MesaGroupByOutputType[P]>
            : GetScalarType<T[P], MesaGroupByOutputType[P]>
        }
      >
    >


  export type MesaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    capacidad?: boolean
    disponible?: boolean
    createdAt?: boolean
    reservaciones?: boolean | Mesa$reservacionesArgs<ExtArgs>
    _count?: boolean | MesaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mesa"]>

  export type MesaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    capacidad?: boolean
    disponible?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["mesa"]>

  export type MesaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    capacidad?: boolean
    disponible?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["mesa"]>

  export type MesaSelectScalar = {
    id?: boolean
    numero?: boolean
    capacidad?: boolean
    disponible?: boolean
    createdAt?: boolean
  }

  export type MesaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "numero" | "capacidad" | "disponible" | "createdAt", ExtArgs["result"]["mesa"]>
  export type MesaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservaciones?: boolean | Mesa$reservacionesArgs<ExtArgs>
    _count?: boolean | MesaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MesaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MesaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MesaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mesa"
    objects: {
      reservaciones: Prisma.$ReservacionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      numero: number
      capacidad: number
      disponible: boolean
      createdAt: Date
    }, ExtArgs["result"]["mesa"]>
    composites: {}
  }

  type MesaGetPayload<S extends boolean | null | undefined | MesaDefaultArgs> = $Result.GetResult<Prisma.$MesaPayload, S>

  type MesaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MesaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MesaCountAggregateInputType | true
    }

  export interface MesaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mesa'], meta: { name: 'Mesa' } }
    /**
     * Find zero or one Mesa that matches the filter.
     * @param {MesaFindUniqueArgs} args - Arguments to find a Mesa
     * @example
     * // Get one Mesa
     * const mesa = await prisma.mesa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MesaFindUniqueArgs>(args: SelectSubset<T, MesaFindUniqueArgs<ExtArgs>>): Prisma__MesaClient<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mesa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MesaFindUniqueOrThrowArgs} args - Arguments to find a Mesa
     * @example
     * // Get one Mesa
     * const mesa = await prisma.mesa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MesaFindUniqueOrThrowArgs>(args: SelectSubset<T, MesaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MesaClient<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mesa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesaFindFirstArgs} args - Arguments to find a Mesa
     * @example
     * // Get one Mesa
     * const mesa = await prisma.mesa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MesaFindFirstArgs>(args?: SelectSubset<T, MesaFindFirstArgs<ExtArgs>>): Prisma__MesaClient<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mesa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesaFindFirstOrThrowArgs} args - Arguments to find a Mesa
     * @example
     * // Get one Mesa
     * const mesa = await prisma.mesa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MesaFindFirstOrThrowArgs>(args?: SelectSubset<T, MesaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MesaClient<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mesas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mesas
     * const mesas = await prisma.mesa.findMany()
     * 
     * // Get first 10 Mesas
     * const mesas = await prisma.mesa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mesaWithIdOnly = await prisma.mesa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MesaFindManyArgs>(args?: SelectSubset<T, MesaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mesa.
     * @param {MesaCreateArgs} args - Arguments to create a Mesa.
     * @example
     * // Create one Mesa
     * const Mesa = await prisma.mesa.create({
     *   data: {
     *     // ... data to create a Mesa
     *   }
     * })
     * 
     */
    create<T extends MesaCreateArgs>(args: SelectSubset<T, MesaCreateArgs<ExtArgs>>): Prisma__MesaClient<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mesas.
     * @param {MesaCreateManyArgs} args - Arguments to create many Mesas.
     * @example
     * // Create many Mesas
     * const mesa = await prisma.mesa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MesaCreateManyArgs>(args?: SelectSubset<T, MesaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mesas and returns the data saved in the database.
     * @param {MesaCreateManyAndReturnArgs} args - Arguments to create many Mesas.
     * @example
     * // Create many Mesas
     * const mesa = await prisma.mesa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mesas and only return the `id`
     * const mesaWithIdOnly = await prisma.mesa.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MesaCreateManyAndReturnArgs>(args?: SelectSubset<T, MesaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mesa.
     * @param {MesaDeleteArgs} args - Arguments to delete one Mesa.
     * @example
     * // Delete one Mesa
     * const Mesa = await prisma.mesa.delete({
     *   where: {
     *     // ... filter to delete one Mesa
     *   }
     * })
     * 
     */
    delete<T extends MesaDeleteArgs>(args: SelectSubset<T, MesaDeleteArgs<ExtArgs>>): Prisma__MesaClient<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mesa.
     * @param {MesaUpdateArgs} args - Arguments to update one Mesa.
     * @example
     * // Update one Mesa
     * const mesa = await prisma.mesa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MesaUpdateArgs>(args: SelectSubset<T, MesaUpdateArgs<ExtArgs>>): Prisma__MesaClient<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mesas.
     * @param {MesaDeleteManyArgs} args - Arguments to filter Mesas to delete.
     * @example
     * // Delete a few Mesas
     * const { count } = await prisma.mesa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MesaDeleteManyArgs>(args?: SelectSubset<T, MesaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mesas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mesas
     * const mesa = await prisma.mesa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MesaUpdateManyArgs>(args: SelectSubset<T, MesaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mesas and returns the data updated in the database.
     * @param {MesaUpdateManyAndReturnArgs} args - Arguments to update many Mesas.
     * @example
     * // Update many Mesas
     * const mesa = await prisma.mesa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mesas and only return the `id`
     * const mesaWithIdOnly = await prisma.mesa.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MesaUpdateManyAndReturnArgs>(args: SelectSubset<T, MesaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mesa.
     * @param {MesaUpsertArgs} args - Arguments to update or create a Mesa.
     * @example
     * // Update or create a Mesa
     * const mesa = await prisma.mesa.upsert({
     *   create: {
     *     // ... data to create a Mesa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mesa we want to update
     *   }
     * })
     */
    upsert<T extends MesaUpsertArgs>(args: SelectSubset<T, MesaUpsertArgs<ExtArgs>>): Prisma__MesaClient<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mesas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesaCountArgs} args - Arguments to filter Mesas to count.
     * @example
     * // Count the number of Mesas
     * const count = await prisma.mesa.count({
     *   where: {
     *     // ... the filter for the Mesas we want to count
     *   }
     * })
    **/
    count<T extends MesaCountArgs>(
      args?: Subset<T, MesaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MesaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mesa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MesaAggregateArgs>(args: Subset<T, MesaAggregateArgs>): Prisma.PrismaPromise<GetMesaAggregateType<T>>

    /**
     * Group by Mesa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MesaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MesaGroupByArgs['orderBy'] }
        : { orderBy?: MesaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MesaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMesaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mesa model
   */
  readonly fields: MesaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mesa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MesaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservaciones<T extends Mesa$reservacionesArgs<ExtArgs> = {}>(args?: Subset<T, Mesa$reservacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Mesa model
   */
  interface MesaFieldRefs {
    readonly id: FieldRef<"Mesa", 'Int'>
    readonly numero: FieldRef<"Mesa", 'Int'>
    readonly capacidad: FieldRef<"Mesa", 'Int'>
    readonly disponible: FieldRef<"Mesa", 'Boolean'>
    readonly createdAt: FieldRef<"Mesa", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Mesa findUnique
   */
  export type MesaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesaInclude<ExtArgs> | null
    /**
     * Filter, which Mesa to fetch.
     */
    where: MesaWhereUniqueInput
  }

  /**
   * Mesa findUniqueOrThrow
   */
  export type MesaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesaInclude<ExtArgs> | null
    /**
     * Filter, which Mesa to fetch.
     */
    where: MesaWhereUniqueInput
  }

  /**
   * Mesa findFirst
   */
  export type MesaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesaInclude<ExtArgs> | null
    /**
     * Filter, which Mesa to fetch.
     */
    where?: MesaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mesas to fetch.
     */
    orderBy?: MesaOrderByWithRelationInput | MesaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mesas.
     */
    cursor?: MesaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mesas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mesas.
     */
    distinct?: MesaScalarFieldEnum | MesaScalarFieldEnum[]
  }

  /**
   * Mesa findFirstOrThrow
   */
  export type MesaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesaInclude<ExtArgs> | null
    /**
     * Filter, which Mesa to fetch.
     */
    where?: MesaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mesas to fetch.
     */
    orderBy?: MesaOrderByWithRelationInput | MesaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mesas.
     */
    cursor?: MesaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mesas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mesas.
     */
    distinct?: MesaScalarFieldEnum | MesaScalarFieldEnum[]
  }

  /**
   * Mesa findMany
   */
  export type MesaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesaInclude<ExtArgs> | null
    /**
     * Filter, which Mesas to fetch.
     */
    where?: MesaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mesas to fetch.
     */
    orderBy?: MesaOrderByWithRelationInput | MesaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mesas.
     */
    cursor?: MesaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mesas.
     */
    skip?: number
    distinct?: MesaScalarFieldEnum | MesaScalarFieldEnum[]
  }

  /**
   * Mesa create
   */
  export type MesaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesaInclude<ExtArgs> | null
    /**
     * The data needed to create a Mesa.
     */
    data: XOR<MesaCreateInput, MesaUncheckedCreateInput>
  }

  /**
   * Mesa createMany
   */
  export type MesaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mesas.
     */
    data: MesaCreateManyInput | MesaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mesa createManyAndReturn
   */
  export type MesaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * The data used to create many Mesas.
     */
    data: MesaCreateManyInput | MesaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mesa update
   */
  export type MesaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesaInclude<ExtArgs> | null
    /**
     * The data needed to update a Mesa.
     */
    data: XOR<MesaUpdateInput, MesaUncheckedUpdateInput>
    /**
     * Choose, which Mesa to update.
     */
    where: MesaWhereUniqueInput
  }

  /**
   * Mesa updateMany
   */
  export type MesaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mesas.
     */
    data: XOR<MesaUpdateManyMutationInput, MesaUncheckedUpdateManyInput>
    /**
     * Filter which Mesas to update
     */
    where?: MesaWhereInput
    /**
     * Limit how many Mesas to update.
     */
    limit?: number
  }

  /**
   * Mesa updateManyAndReturn
   */
  export type MesaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * The data used to update Mesas.
     */
    data: XOR<MesaUpdateManyMutationInput, MesaUncheckedUpdateManyInput>
    /**
     * Filter which Mesas to update
     */
    where?: MesaWhereInput
    /**
     * Limit how many Mesas to update.
     */
    limit?: number
  }

  /**
   * Mesa upsert
   */
  export type MesaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesaInclude<ExtArgs> | null
    /**
     * The filter to search for the Mesa to update in case it exists.
     */
    where: MesaWhereUniqueInput
    /**
     * In case the Mesa found by the `where` argument doesn't exist, create a new Mesa with this data.
     */
    create: XOR<MesaCreateInput, MesaUncheckedCreateInput>
    /**
     * In case the Mesa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MesaUpdateInput, MesaUncheckedUpdateInput>
  }

  /**
   * Mesa delete
   */
  export type MesaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesaInclude<ExtArgs> | null
    /**
     * Filter which Mesa to delete.
     */
    where: MesaWhereUniqueInput
  }

  /**
   * Mesa deleteMany
   */
  export type MesaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mesas to delete
     */
    where?: MesaWhereInput
    /**
     * Limit how many Mesas to delete.
     */
    limit?: number
  }

  /**
   * Mesa.reservaciones
   */
  export type Mesa$reservacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservacion
     */
    select?: ReservacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservacion
     */
    omit?: ReservacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservacionInclude<ExtArgs> | null
    where?: ReservacionWhereInput
    orderBy?: ReservacionOrderByWithRelationInput | ReservacionOrderByWithRelationInput[]
    cursor?: ReservacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservacionScalarFieldEnum | ReservacionScalarFieldEnum[]
  }

  /**
   * Mesa without action
   */
  export type MesaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesaInclude<ExtArgs> | null
  }


  /**
   * Model Reservacion
   */

  export type AggregateReservacion = {
    _count: ReservacionCountAggregateOutputType | null
    _avg: ReservacionAvgAggregateOutputType | null
    _sum: ReservacionSumAggregateOutputType | null
    _min: ReservacionMinAggregateOutputType | null
    _max: ReservacionMaxAggregateOutputType | null
  }

  export type ReservacionAvgAggregateOutputType = {
    id: number | null
    personas: number | null
    usuarioId: number | null
    mesaId: number | null
  }

  export type ReservacionSumAggregateOutputType = {
    id: number | null
    personas: number | null
    usuarioId: number | null
    mesaId: number | null
  }

  export type ReservacionMinAggregateOutputType = {
    id: number | null
    fecha: Date | null
    hora: Date | null
    personas: number | null
    estado: $Enums.Estado | null
    usuarioId: number | null
    mesaId: number | null
    createdAt: Date | null
  }

  export type ReservacionMaxAggregateOutputType = {
    id: number | null
    fecha: Date | null
    hora: Date | null
    personas: number | null
    estado: $Enums.Estado | null
    usuarioId: number | null
    mesaId: number | null
    createdAt: Date | null
  }

  export type ReservacionCountAggregateOutputType = {
    id: number
    fecha: number
    hora: number
    personas: number
    estado: number
    usuarioId: number
    mesaId: number
    createdAt: number
    _all: number
  }


  export type ReservacionAvgAggregateInputType = {
    id?: true
    personas?: true
    usuarioId?: true
    mesaId?: true
  }

  export type ReservacionSumAggregateInputType = {
    id?: true
    personas?: true
    usuarioId?: true
    mesaId?: true
  }

  export type ReservacionMinAggregateInputType = {
    id?: true
    fecha?: true
    hora?: true
    personas?: true
    estado?: true
    usuarioId?: true
    mesaId?: true
    createdAt?: true
  }

  export type ReservacionMaxAggregateInputType = {
    id?: true
    fecha?: true
    hora?: true
    personas?: true
    estado?: true
    usuarioId?: true
    mesaId?: true
    createdAt?: true
  }

  export type ReservacionCountAggregateInputType = {
    id?: true
    fecha?: true
    hora?: true
    personas?: true
    estado?: true
    usuarioId?: true
    mesaId?: true
    createdAt?: true
    _all?: true
  }

  export type ReservacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservacion to aggregate.
     */
    where?: ReservacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservacions to fetch.
     */
    orderBy?: ReservacionOrderByWithRelationInput | ReservacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reservacions
    **/
    _count?: true | ReservacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservacionMaxAggregateInputType
  }

  export type GetReservacionAggregateType<T extends ReservacionAggregateArgs> = {
        [P in keyof T & keyof AggregateReservacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservacion[P]>
      : GetScalarType<T[P], AggregateReservacion[P]>
  }




  export type ReservacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservacionWhereInput
    orderBy?: ReservacionOrderByWithAggregationInput | ReservacionOrderByWithAggregationInput[]
    by: ReservacionScalarFieldEnum[] | ReservacionScalarFieldEnum
    having?: ReservacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservacionCountAggregateInputType | true
    _avg?: ReservacionAvgAggregateInputType
    _sum?: ReservacionSumAggregateInputType
    _min?: ReservacionMinAggregateInputType
    _max?: ReservacionMaxAggregateInputType
  }

  export type ReservacionGroupByOutputType = {
    id: number
    fecha: Date
    hora: Date
    personas: number
    estado: $Enums.Estado
    usuarioId: number
    mesaId: number
    createdAt: Date
    _count: ReservacionCountAggregateOutputType | null
    _avg: ReservacionAvgAggregateOutputType | null
    _sum: ReservacionSumAggregateOutputType | null
    _min: ReservacionMinAggregateOutputType | null
    _max: ReservacionMaxAggregateOutputType | null
  }

  type GetReservacionGroupByPayload<T extends ReservacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservacionGroupByOutputType[P]>
            : GetScalarType<T[P], ReservacionGroupByOutputType[P]>
        }
      >
    >


  export type ReservacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    hora?: boolean
    personas?: boolean
    estado?: boolean
    usuarioId?: boolean
    mesaId?: boolean
    createdAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    mesa?: boolean | MesaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservacion"]>

  export type ReservacionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    hora?: boolean
    personas?: boolean
    estado?: boolean
    usuarioId?: boolean
    mesaId?: boolean
    createdAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    mesa?: boolean | MesaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservacion"]>

  export type ReservacionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    hora?: boolean
    personas?: boolean
    estado?: boolean
    usuarioId?: boolean
    mesaId?: boolean
    createdAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    mesa?: boolean | MesaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservacion"]>

  export type ReservacionSelectScalar = {
    id?: boolean
    fecha?: boolean
    hora?: boolean
    personas?: boolean
    estado?: boolean
    usuarioId?: boolean
    mesaId?: boolean
    createdAt?: boolean
  }

  export type ReservacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fecha" | "hora" | "personas" | "estado" | "usuarioId" | "mesaId" | "createdAt", ExtArgs["result"]["reservacion"]>
  export type ReservacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    mesa?: boolean | MesaDefaultArgs<ExtArgs>
  }
  export type ReservacionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    mesa?: boolean | MesaDefaultArgs<ExtArgs>
  }
  export type ReservacionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    mesa?: boolean | MesaDefaultArgs<ExtArgs>
  }

  export type $ReservacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reservacion"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      mesa: Prisma.$MesaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fecha: Date
      hora: Date
      personas: number
      estado: $Enums.Estado
      usuarioId: number
      mesaId: number
      createdAt: Date
    }, ExtArgs["result"]["reservacion"]>
    composites: {}
  }

  type ReservacionGetPayload<S extends boolean | null | undefined | ReservacionDefaultArgs> = $Result.GetResult<Prisma.$ReservacionPayload, S>

  type ReservacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReservacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReservacionCountAggregateInputType | true
    }

  export interface ReservacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reservacion'], meta: { name: 'Reservacion' } }
    /**
     * Find zero or one Reservacion that matches the filter.
     * @param {ReservacionFindUniqueArgs} args - Arguments to find a Reservacion
     * @example
     * // Get one Reservacion
     * const reservacion = await prisma.reservacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReservacionFindUniqueArgs>(args: SelectSubset<T, ReservacionFindUniqueArgs<ExtArgs>>): Prisma__ReservacionClient<$Result.GetResult<Prisma.$ReservacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reservacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReservacionFindUniqueOrThrowArgs} args - Arguments to find a Reservacion
     * @example
     * // Get one Reservacion
     * const reservacion = await prisma.reservacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReservacionFindUniqueOrThrowArgs>(args: SelectSubset<T, ReservacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReservacionClient<$Result.GetResult<Prisma.$ReservacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservacionFindFirstArgs} args - Arguments to find a Reservacion
     * @example
     * // Get one Reservacion
     * const reservacion = await prisma.reservacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReservacionFindFirstArgs>(args?: SelectSubset<T, ReservacionFindFirstArgs<ExtArgs>>): Prisma__ReservacionClient<$Result.GetResult<Prisma.$ReservacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservacionFindFirstOrThrowArgs} args - Arguments to find a Reservacion
     * @example
     * // Get one Reservacion
     * const reservacion = await prisma.reservacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReservacionFindFirstOrThrowArgs>(args?: SelectSubset<T, ReservacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReservacionClient<$Result.GetResult<Prisma.$ReservacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reservacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservacions
     * const reservacions = await prisma.reservacion.findMany()
     * 
     * // Get first 10 Reservacions
     * const reservacions = await prisma.reservacion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reservacionWithIdOnly = await prisma.reservacion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReservacionFindManyArgs>(args?: SelectSubset<T, ReservacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reservacion.
     * @param {ReservacionCreateArgs} args - Arguments to create a Reservacion.
     * @example
     * // Create one Reservacion
     * const Reservacion = await prisma.reservacion.create({
     *   data: {
     *     // ... data to create a Reservacion
     *   }
     * })
     * 
     */
    create<T extends ReservacionCreateArgs>(args: SelectSubset<T, ReservacionCreateArgs<ExtArgs>>): Prisma__ReservacionClient<$Result.GetResult<Prisma.$ReservacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reservacions.
     * @param {ReservacionCreateManyArgs} args - Arguments to create many Reservacions.
     * @example
     * // Create many Reservacions
     * const reservacion = await prisma.reservacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReservacionCreateManyArgs>(args?: SelectSubset<T, ReservacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reservacions and returns the data saved in the database.
     * @param {ReservacionCreateManyAndReturnArgs} args - Arguments to create many Reservacions.
     * @example
     * // Create many Reservacions
     * const reservacion = await prisma.reservacion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reservacions and only return the `id`
     * const reservacionWithIdOnly = await prisma.reservacion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReservacionCreateManyAndReturnArgs>(args?: SelectSubset<T, ReservacionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservacionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reservacion.
     * @param {ReservacionDeleteArgs} args - Arguments to delete one Reservacion.
     * @example
     * // Delete one Reservacion
     * const Reservacion = await prisma.reservacion.delete({
     *   where: {
     *     // ... filter to delete one Reservacion
     *   }
     * })
     * 
     */
    delete<T extends ReservacionDeleteArgs>(args: SelectSubset<T, ReservacionDeleteArgs<ExtArgs>>): Prisma__ReservacionClient<$Result.GetResult<Prisma.$ReservacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reservacion.
     * @param {ReservacionUpdateArgs} args - Arguments to update one Reservacion.
     * @example
     * // Update one Reservacion
     * const reservacion = await prisma.reservacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReservacionUpdateArgs>(args: SelectSubset<T, ReservacionUpdateArgs<ExtArgs>>): Prisma__ReservacionClient<$Result.GetResult<Prisma.$ReservacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reservacions.
     * @param {ReservacionDeleteManyArgs} args - Arguments to filter Reservacions to delete.
     * @example
     * // Delete a few Reservacions
     * const { count } = await prisma.reservacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReservacionDeleteManyArgs>(args?: SelectSubset<T, ReservacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservacions
     * const reservacion = await prisma.reservacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReservacionUpdateManyArgs>(args: SelectSubset<T, ReservacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservacions and returns the data updated in the database.
     * @param {ReservacionUpdateManyAndReturnArgs} args - Arguments to update many Reservacions.
     * @example
     * // Update many Reservacions
     * const reservacion = await prisma.reservacion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reservacions and only return the `id`
     * const reservacionWithIdOnly = await prisma.reservacion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReservacionUpdateManyAndReturnArgs>(args: SelectSubset<T, ReservacionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservacionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reservacion.
     * @param {ReservacionUpsertArgs} args - Arguments to update or create a Reservacion.
     * @example
     * // Update or create a Reservacion
     * const reservacion = await prisma.reservacion.upsert({
     *   create: {
     *     // ... data to create a Reservacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reservacion we want to update
     *   }
     * })
     */
    upsert<T extends ReservacionUpsertArgs>(args: SelectSubset<T, ReservacionUpsertArgs<ExtArgs>>): Prisma__ReservacionClient<$Result.GetResult<Prisma.$ReservacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reservacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservacionCountArgs} args - Arguments to filter Reservacions to count.
     * @example
     * // Count the number of Reservacions
     * const count = await prisma.reservacion.count({
     *   where: {
     *     // ... the filter for the Reservacions we want to count
     *   }
     * })
    **/
    count<T extends ReservacionCountArgs>(
      args?: Subset<T, ReservacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reservacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReservacionAggregateArgs>(args: Subset<T, ReservacionAggregateArgs>): Prisma.PrismaPromise<GetReservacionAggregateType<T>>

    /**
     * Group by Reservacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservacionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReservacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservacionGroupByArgs['orderBy'] }
        : { orderBy?: ReservacionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReservacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reservacion model
   */
  readonly fields: ReservacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reservacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mesa<T extends MesaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MesaDefaultArgs<ExtArgs>>): Prisma__MesaClient<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reservacion model
   */
  interface ReservacionFieldRefs {
    readonly id: FieldRef<"Reservacion", 'Int'>
    readonly fecha: FieldRef<"Reservacion", 'DateTime'>
    readonly hora: FieldRef<"Reservacion", 'DateTime'>
    readonly personas: FieldRef<"Reservacion", 'Int'>
    readonly estado: FieldRef<"Reservacion", 'Estado'>
    readonly usuarioId: FieldRef<"Reservacion", 'Int'>
    readonly mesaId: FieldRef<"Reservacion", 'Int'>
    readonly createdAt: FieldRef<"Reservacion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reservacion findUnique
   */
  export type ReservacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservacion
     */
    select?: ReservacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservacion
     */
    omit?: ReservacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservacionInclude<ExtArgs> | null
    /**
     * Filter, which Reservacion to fetch.
     */
    where: ReservacionWhereUniqueInput
  }

  /**
   * Reservacion findUniqueOrThrow
   */
  export type ReservacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservacion
     */
    select?: ReservacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservacion
     */
    omit?: ReservacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservacionInclude<ExtArgs> | null
    /**
     * Filter, which Reservacion to fetch.
     */
    where: ReservacionWhereUniqueInput
  }

  /**
   * Reservacion findFirst
   */
  export type ReservacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservacion
     */
    select?: ReservacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservacion
     */
    omit?: ReservacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservacionInclude<ExtArgs> | null
    /**
     * Filter, which Reservacion to fetch.
     */
    where?: ReservacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservacions to fetch.
     */
    orderBy?: ReservacionOrderByWithRelationInput | ReservacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservacions.
     */
    cursor?: ReservacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservacions.
     */
    distinct?: ReservacionScalarFieldEnum | ReservacionScalarFieldEnum[]
  }

  /**
   * Reservacion findFirstOrThrow
   */
  export type ReservacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservacion
     */
    select?: ReservacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservacion
     */
    omit?: ReservacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservacionInclude<ExtArgs> | null
    /**
     * Filter, which Reservacion to fetch.
     */
    where?: ReservacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservacions to fetch.
     */
    orderBy?: ReservacionOrderByWithRelationInput | ReservacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservacions.
     */
    cursor?: ReservacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservacions.
     */
    distinct?: ReservacionScalarFieldEnum | ReservacionScalarFieldEnum[]
  }

  /**
   * Reservacion findMany
   */
  export type ReservacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservacion
     */
    select?: ReservacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservacion
     */
    omit?: ReservacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservacionInclude<ExtArgs> | null
    /**
     * Filter, which Reservacions to fetch.
     */
    where?: ReservacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservacions to fetch.
     */
    orderBy?: ReservacionOrderByWithRelationInput | ReservacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reservacions.
     */
    cursor?: ReservacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservacions.
     */
    skip?: number
    distinct?: ReservacionScalarFieldEnum | ReservacionScalarFieldEnum[]
  }

  /**
   * Reservacion create
   */
  export type ReservacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservacion
     */
    select?: ReservacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservacion
     */
    omit?: ReservacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservacionInclude<ExtArgs> | null
    /**
     * The data needed to create a Reservacion.
     */
    data: XOR<ReservacionCreateInput, ReservacionUncheckedCreateInput>
  }

  /**
   * Reservacion createMany
   */
  export type ReservacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reservacions.
     */
    data: ReservacionCreateManyInput | ReservacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reservacion createManyAndReturn
   */
  export type ReservacionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservacion
     */
    select?: ReservacionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reservacion
     */
    omit?: ReservacionOmit<ExtArgs> | null
    /**
     * The data used to create many Reservacions.
     */
    data: ReservacionCreateManyInput | ReservacionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservacionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reservacion update
   */
  export type ReservacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservacion
     */
    select?: ReservacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservacion
     */
    omit?: ReservacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservacionInclude<ExtArgs> | null
    /**
     * The data needed to update a Reservacion.
     */
    data: XOR<ReservacionUpdateInput, ReservacionUncheckedUpdateInput>
    /**
     * Choose, which Reservacion to update.
     */
    where: ReservacionWhereUniqueInput
  }

  /**
   * Reservacion updateMany
   */
  export type ReservacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reservacions.
     */
    data: XOR<ReservacionUpdateManyMutationInput, ReservacionUncheckedUpdateManyInput>
    /**
     * Filter which Reservacions to update
     */
    where?: ReservacionWhereInput
    /**
     * Limit how many Reservacions to update.
     */
    limit?: number
  }

  /**
   * Reservacion updateManyAndReturn
   */
  export type ReservacionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservacion
     */
    select?: ReservacionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reservacion
     */
    omit?: ReservacionOmit<ExtArgs> | null
    /**
     * The data used to update Reservacions.
     */
    data: XOR<ReservacionUpdateManyMutationInput, ReservacionUncheckedUpdateManyInput>
    /**
     * Filter which Reservacions to update
     */
    where?: ReservacionWhereInput
    /**
     * Limit how many Reservacions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservacionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reservacion upsert
   */
  export type ReservacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservacion
     */
    select?: ReservacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservacion
     */
    omit?: ReservacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservacionInclude<ExtArgs> | null
    /**
     * The filter to search for the Reservacion to update in case it exists.
     */
    where: ReservacionWhereUniqueInput
    /**
     * In case the Reservacion found by the `where` argument doesn't exist, create a new Reservacion with this data.
     */
    create: XOR<ReservacionCreateInput, ReservacionUncheckedCreateInput>
    /**
     * In case the Reservacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservacionUpdateInput, ReservacionUncheckedUpdateInput>
  }

  /**
   * Reservacion delete
   */
  export type ReservacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservacion
     */
    select?: ReservacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservacion
     */
    omit?: ReservacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservacionInclude<ExtArgs> | null
    /**
     * Filter which Reservacion to delete.
     */
    where: ReservacionWhereUniqueInput
  }

  /**
   * Reservacion deleteMany
   */
  export type ReservacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservacions to delete
     */
    where?: ReservacionWhereInput
    /**
     * Limit how many Reservacions to delete.
     */
    limit?: number
  }

  /**
   * Reservacion without action
   */
  export type ReservacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservacion
     */
    select?: ReservacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservacion
     */
    omit?: ReservacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservacionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    correo: 'correo',
    password: 'password',
    rol: 'rol',
    createdAt: 'createdAt'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const MesaScalarFieldEnum: {
    id: 'id',
    numero: 'numero',
    capacidad: 'capacidad',
    disponible: 'disponible',
    createdAt: 'createdAt'
  };

  export type MesaScalarFieldEnum = (typeof MesaScalarFieldEnum)[keyof typeof MesaScalarFieldEnum]


  export const ReservacionScalarFieldEnum: {
    id: 'id',
    fecha: 'fecha',
    hora: 'hora',
    personas: 'personas',
    estado: 'estado',
    usuarioId: 'usuarioId',
    mesaId: 'mesaId',
    createdAt: 'createdAt'
  };

  export type ReservacionScalarFieldEnum = (typeof ReservacionScalarFieldEnum)[keyof typeof ReservacionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Rol'
   */
  export type EnumRolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rol'>
    


  /**
   * Reference to a field of type 'Rol[]'
   */
  export type ListEnumRolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rol[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Estado'
   */
  export type EnumEstadoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Estado'>
    


  /**
   * Reference to a field of type 'Estado[]'
   */
  export type ListEnumEstadoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Estado[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nombre?: StringFilter<"Usuario"> | string
    correo?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    rol?: EnumRolFilter<"Usuario"> | $Enums.Rol
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    reservaciones?: ReservacionListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    password?: SortOrder
    rol?: SortOrder
    createdAt?: SortOrder
    reservaciones?: ReservacionOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    correo?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nombre?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    rol?: EnumRolFilter<"Usuario"> | $Enums.Rol
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    reservaciones?: ReservacionListRelationFilter
  }, "id" | "correo">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    password?: SortOrder
    rol?: SortOrder
    createdAt?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    correo?: StringWithAggregatesFilter<"Usuario"> | string
    password?: StringWithAggregatesFilter<"Usuario"> | string
    rol?: EnumRolWithAggregatesFilter<"Usuario"> | $Enums.Rol
    createdAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type MesaWhereInput = {
    AND?: MesaWhereInput | MesaWhereInput[]
    OR?: MesaWhereInput[]
    NOT?: MesaWhereInput | MesaWhereInput[]
    id?: IntFilter<"Mesa"> | number
    numero?: IntFilter<"Mesa"> | number
    capacidad?: IntFilter<"Mesa"> | number
    disponible?: BoolFilter<"Mesa"> | boolean
    createdAt?: DateTimeFilter<"Mesa"> | Date | string
    reservaciones?: ReservacionListRelationFilter
  }

  export type MesaOrderByWithRelationInput = {
    id?: SortOrder
    numero?: SortOrder
    capacidad?: SortOrder
    disponible?: SortOrder
    createdAt?: SortOrder
    reservaciones?: ReservacionOrderByRelationAggregateInput
  }

  export type MesaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    numero?: number
    AND?: MesaWhereInput | MesaWhereInput[]
    OR?: MesaWhereInput[]
    NOT?: MesaWhereInput | MesaWhereInput[]
    capacidad?: IntFilter<"Mesa"> | number
    disponible?: BoolFilter<"Mesa"> | boolean
    createdAt?: DateTimeFilter<"Mesa"> | Date | string
    reservaciones?: ReservacionListRelationFilter
  }, "id" | "numero">

  export type MesaOrderByWithAggregationInput = {
    id?: SortOrder
    numero?: SortOrder
    capacidad?: SortOrder
    disponible?: SortOrder
    createdAt?: SortOrder
    _count?: MesaCountOrderByAggregateInput
    _avg?: MesaAvgOrderByAggregateInput
    _max?: MesaMaxOrderByAggregateInput
    _min?: MesaMinOrderByAggregateInput
    _sum?: MesaSumOrderByAggregateInput
  }

  export type MesaScalarWhereWithAggregatesInput = {
    AND?: MesaScalarWhereWithAggregatesInput | MesaScalarWhereWithAggregatesInput[]
    OR?: MesaScalarWhereWithAggregatesInput[]
    NOT?: MesaScalarWhereWithAggregatesInput | MesaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Mesa"> | number
    numero?: IntWithAggregatesFilter<"Mesa"> | number
    capacidad?: IntWithAggregatesFilter<"Mesa"> | number
    disponible?: BoolWithAggregatesFilter<"Mesa"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Mesa"> | Date | string
  }

  export type ReservacionWhereInput = {
    AND?: ReservacionWhereInput | ReservacionWhereInput[]
    OR?: ReservacionWhereInput[]
    NOT?: ReservacionWhereInput | ReservacionWhereInput[]
    id?: IntFilter<"Reservacion"> | number
    fecha?: DateTimeFilter<"Reservacion"> | Date | string
    hora?: DateTimeFilter<"Reservacion"> | Date | string
    personas?: IntFilter<"Reservacion"> | number
    estado?: EnumEstadoFilter<"Reservacion"> | $Enums.Estado
    usuarioId?: IntFilter<"Reservacion"> | number
    mesaId?: IntFilter<"Reservacion"> | number
    createdAt?: DateTimeFilter<"Reservacion"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    mesa?: XOR<MesaScalarRelationFilter, MesaWhereInput>
  }

  export type ReservacionOrderByWithRelationInput = {
    id?: SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    personas?: SortOrder
    estado?: SortOrder
    usuarioId?: SortOrder
    mesaId?: SortOrder
    createdAt?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    mesa?: MesaOrderByWithRelationInput
  }

  export type ReservacionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReservacionWhereInput | ReservacionWhereInput[]
    OR?: ReservacionWhereInput[]
    NOT?: ReservacionWhereInput | ReservacionWhereInput[]
    fecha?: DateTimeFilter<"Reservacion"> | Date | string
    hora?: DateTimeFilter<"Reservacion"> | Date | string
    personas?: IntFilter<"Reservacion"> | number
    estado?: EnumEstadoFilter<"Reservacion"> | $Enums.Estado
    usuarioId?: IntFilter<"Reservacion"> | number
    mesaId?: IntFilter<"Reservacion"> | number
    createdAt?: DateTimeFilter<"Reservacion"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    mesa?: XOR<MesaScalarRelationFilter, MesaWhereInput>
  }, "id">

  export type ReservacionOrderByWithAggregationInput = {
    id?: SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    personas?: SortOrder
    estado?: SortOrder
    usuarioId?: SortOrder
    mesaId?: SortOrder
    createdAt?: SortOrder
    _count?: ReservacionCountOrderByAggregateInput
    _avg?: ReservacionAvgOrderByAggregateInput
    _max?: ReservacionMaxOrderByAggregateInput
    _min?: ReservacionMinOrderByAggregateInput
    _sum?: ReservacionSumOrderByAggregateInput
  }

  export type ReservacionScalarWhereWithAggregatesInput = {
    AND?: ReservacionScalarWhereWithAggregatesInput | ReservacionScalarWhereWithAggregatesInput[]
    OR?: ReservacionScalarWhereWithAggregatesInput[]
    NOT?: ReservacionScalarWhereWithAggregatesInput | ReservacionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Reservacion"> | number
    fecha?: DateTimeWithAggregatesFilter<"Reservacion"> | Date | string
    hora?: DateTimeWithAggregatesFilter<"Reservacion"> | Date | string
    personas?: IntWithAggregatesFilter<"Reservacion"> | number
    estado?: EnumEstadoWithAggregatesFilter<"Reservacion"> | $Enums.Estado
    usuarioId?: IntWithAggregatesFilter<"Reservacion"> | number
    mesaId?: IntWithAggregatesFilter<"Reservacion"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Reservacion"> | Date | string
  }

  export type UsuarioCreateInput = {
    nombre: string
    correo: string
    password: string
    rol?: $Enums.Rol
    createdAt?: Date | string
    reservaciones?: ReservacionCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nombre: string
    correo: string
    password: string
    rol?: $Enums.Rol
    createdAt?: Date | string
    reservaciones?: ReservacionUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservaciones?: ReservacionUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservaciones?: ReservacionUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nombre: string
    correo: string
    password: string
    rol?: $Enums.Rol
    createdAt?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MesaCreateInput = {
    numero: number
    capacidad: number
    disponible?: boolean
    createdAt?: Date | string
    reservaciones?: ReservacionCreateNestedManyWithoutMesaInput
  }

  export type MesaUncheckedCreateInput = {
    id?: number
    numero: number
    capacidad: number
    disponible?: boolean
    createdAt?: Date | string
    reservaciones?: ReservacionUncheckedCreateNestedManyWithoutMesaInput
  }

  export type MesaUpdateInput = {
    numero?: IntFieldUpdateOperationsInput | number
    capacidad?: IntFieldUpdateOperationsInput | number
    disponible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservaciones?: ReservacionUpdateManyWithoutMesaNestedInput
  }

  export type MesaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    capacidad?: IntFieldUpdateOperationsInput | number
    disponible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservaciones?: ReservacionUncheckedUpdateManyWithoutMesaNestedInput
  }

  export type MesaCreateManyInput = {
    id?: number
    numero: number
    capacidad: number
    disponible?: boolean
    createdAt?: Date | string
  }

  export type MesaUpdateManyMutationInput = {
    numero?: IntFieldUpdateOperationsInput | number
    capacidad?: IntFieldUpdateOperationsInput | number
    disponible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MesaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    capacidad?: IntFieldUpdateOperationsInput | number
    disponible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservacionCreateInput = {
    fecha: Date | string
    hora: Date | string
    personas: number
    estado?: $Enums.Estado
    createdAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutReservacionesInput
    mesa: MesaCreateNestedOneWithoutReservacionesInput
  }

  export type ReservacionUncheckedCreateInput = {
    id?: number
    fecha: Date | string
    hora: Date | string
    personas: number
    estado?: $Enums.Estado
    usuarioId: number
    mesaId: number
    createdAt?: Date | string
  }

  export type ReservacionUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    personas?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutReservacionesNestedInput
    mesa?: MesaUpdateOneRequiredWithoutReservacionesNestedInput
  }

  export type ReservacionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    personas?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    usuarioId?: IntFieldUpdateOperationsInput | number
    mesaId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservacionCreateManyInput = {
    id?: number
    fecha: Date | string
    hora: Date | string
    personas: number
    estado?: $Enums.Estado
    usuarioId: number
    mesaId: number
    createdAt?: Date | string
  }

  export type ReservacionUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    personas?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservacionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    personas?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    usuarioId?: IntFieldUpdateOperationsInput | number
    mesaId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRolFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolFilter<$PrismaModel> | $Enums.Rol
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ReservacionListRelationFilter = {
    every?: ReservacionWhereInput
    some?: ReservacionWhereInput
    none?: ReservacionWhereInput
  }

  export type ReservacionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    password?: SortOrder
    rol?: SortOrder
    createdAt?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    password?: SortOrder
    rol?: SortOrder
    createdAt?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    password?: SortOrder
    rol?: SortOrder
    createdAt?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolWithAggregatesFilter<$PrismaModel> | $Enums.Rol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolFilter<$PrismaModel>
    _max?: NestedEnumRolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type MesaCountOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    capacidad?: SortOrder
    disponible?: SortOrder
    createdAt?: SortOrder
  }

  export type MesaAvgOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    capacidad?: SortOrder
  }

  export type MesaMaxOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    capacidad?: SortOrder
    disponible?: SortOrder
    createdAt?: SortOrder
  }

  export type MesaMinOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    capacidad?: SortOrder
    disponible?: SortOrder
    createdAt?: SortOrder
  }

  export type MesaSumOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    capacidad?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumEstadoFilter<$PrismaModel = never> = {
    equals?: $Enums.Estado | EnumEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.Estado[] | ListEnumEstadoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Estado[] | ListEnumEstadoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoFilter<$PrismaModel> | $Enums.Estado
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type MesaScalarRelationFilter = {
    is?: MesaWhereInput
    isNot?: MesaWhereInput
  }

  export type ReservacionCountOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    personas?: SortOrder
    estado?: SortOrder
    usuarioId?: SortOrder
    mesaId?: SortOrder
    createdAt?: SortOrder
  }

  export type ReservacionAvgOrderByAggregateInput = {
    id?: SortOrder
    personas?: SortOrder
    usuarioId?: SortOrder
    mesaId?: SortOrder
  }

  export type ReservacionMaxOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    personas?: SortOrder
    estado?: SortOrder
    usuarioId?: SortOrder
    mesaId?: SortOrder
    createdAt?: SortOrder
  }

  export type ReservacionMinOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    personas?: SortOrder
    estado?: SortOrder
    usuarioId?: SortOrder
    mesaId?: SortOrder
    createdAt?: SortOrder
  }

  export type ReservacionSumOrderByAggregateInput = {
    id?: SortOrder
    personas?: SortOrder
    usuarioId?: SortOrder
    mesaId?: SortOrder
  }

  export type EnumEstadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Estado | EnumEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.Estado[] | ListEnumEstadoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Estado[] | ListEnumEstadoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoWithAggregatesFilter<$PrismaModel> | $Enums.Estado
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoFilter<$PrismaModel>
    _max?: NestedEnumEstadoFilter<$PrismaModel>
  }

  export type ReservacionCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ReservacionCreateWithoutUsuarioInput, ReservacionUncheckedCreateWithoutUsuarioInput> | ReservacionCreateWithoutUsuarioInput[] | ReservacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ReservacionCreateOrConnectWithoutUsuarioInput | ReservacionCreateOrConnectWithoutUsuarioInput[]
    createMany?: ReservacionCreateManyUsuarioInputEnvelope
    connect?: ReservacionWhereUniqueInput | ReservacionWhereUniqueInput[]
  }

  export type ReservacionUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ReservacionCreateWithoutUsuarioInput, ReservacionUncheckedCreateWithoutUsuarioInput> | ReservacionCreateWithoutUsuarioInput[] | ReservacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ReservacionCreateOrConnectWithoutUsuarioInput | ReservacionCreateOrConnectWithoutUsuarioInput[]
    createMany?: ReservacionCreateManyUsuarioInputEnvelope
    connect?: ReservacionWhereUniqueInput | ReservacionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRolFieldUpdateOperationsInput = {
    set?: $Enums.Rol
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ReservacionUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ReservacionCreateWithoutUsuarioInput, ReservacionUncheckedCreateWithoutUsuarioInput> | ReservacionCreateWithoutUsuarioInput[] | ReservacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ReservacionCreateOrConnectWithoutUsuarioInput | ReservacionCreateOrConnectWithoutUsuarioInput[]
    upsert?: ReservacionUpsertWithWhereUniqueWithoutUsuarioInput | ReservacionUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ReservacionCreateManyUsuarioInputEnvelope
    set?: ReservacionWhereUniqueInput | ReservacionWhereUniqueInput[]
    disconnect?: ReservacionWhereUniqueInput | ReservacionWhereUniqueInput[]
    delete?: ReservacionWhereUniqueInput | ReservacionWhereUniqueInput[]
    connect?: ReservacionWhereUniqueInput | ReservacionWhereUniqueInput[]
    update?: ReservacionUpdateWithWhereUniqueWithoutUsuarioInput | ReservacionUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ReservacionUpdateManyWithWhereWithoutUsuarioInput | ReservacionUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ReservacionScalarWhereInput | ReservacionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ReservacionUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ReservacionCreateWithoutUsuarioInput, ReservacionUncheckedCreateWithoutUsuarioInput> | ReservacionCreateWithoutUsuarioInput[] | ReservacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ReservacionCreateOrConnectWithoutUsuarioInput | ReservacionCreateOrConnectWithoutUsuarioInput[]
    upsert?: ReservacionUpsertWithWhereUniqueWithoutUsuarioInput | ReservacionUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ReservacionCreateManyUsuarioInputEnvelope
    set?: ReservacionWhereUniqueInput | ReservacionWhereUniqueInput[]
    disconnect?: ReservacionWhereUniqueInput | ReservacionWhereUniqueInput[]
    delete?: ReservacionWhereUniqueInput | ReservacionWhereUniqueInput[]
    connect?: ReservacionWhereUniqueInput | ReservacionWhereUniqueInput[]
    update?: ReservacionUpdateWithWhereUniqueWithoutUsuarioInput | ReservacionUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ReservacionUpdateManyWithWhereWithoutUsuarioInput | ReservacionUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ReservacionScalarWhereInput | ReservacionScalarWhereInput[]
  }

  export type ReservacionCreateNestedManyWithoutMesaInput = {
    create?: XOR<ReservacionCreateWithoutMesaInput, ReservacionUncheckedCreateWithoutMesaInput> | ReservacionCreateWithoutMesaInput[] | ReservacionUncheckedCreateWithoutMesaInput[]
    connectOrCreate?: ReservacionCreateOrConnectWithoutMesaInput | ReservacionCreateOrConnectWithoutMesaInput[]
    createMany?: ReservacionCreateManyMesaInputEnvelope
    connect?: ReservacionWhereUniqueInput | ReservacionWhereUniqueInput[]
  }

  export type ReservacionUncheckedCreateNestedManyWithoutMesaInput = {
    create?: XOR<ReservacionCreateWithoutMesaInput, ReservacionUncheckedCreateWithoutMesaInput> | ReservacionCreateWithoutMesaInput[] | ReservacionUncheckedCreateWithoutMesaInput[]
    connectOrCreate?: ReservacionCreateOrConnectWithoutMesaInput | ReservacionCreateOrConnectWithoutMesaInput[]
    createMany?: ReservacionCreateManyMesaInputEnvelope
    connect?: ReservacionWhereUniqueInput | ReservacionWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ReservacionUpdateManyWithoutMesaNestedInput = {
    create?: XOR<ReservacionCreateWithoutMesaInput, ReservacionUncheckedCreateWithoutMesaInput> | ReservacionCreateWithoutMesaInput[] | ReservacionUncheckedCreateWithoutMesaInput[]
    connectOrCreate?: ReservacionCreateOrConnectWithoutMesaInput | ReservacionCreateOrConnectWithoutMesaInput[]
    upsert?: ReservacionUpsertWithWhereUniqueWithoutMesaInput | ReservacionUpsertWithWhereUniqueWithoutMesaInput[]
    createMany?: ReservacionCreateManyMesaInputEnvelope
    set?: ReservacionWhereUniqueInput | ReservacionWhereUniqueInput[]
    disconnect?: ReservacionWhereUniqueInput | ReservacionWhereUniqueInput[]
    delete?: ReservacionWhereUniqueInput | ReservacionWhereUniqueInput[]
    connect?: ReservacionWhereUniqueInput | ReservacionWhereUniqueInput[]
    update?: ReservacionUpdateWithWhereUniqueWithoutMesaInput | ReservacionUpdateWithWhereUniqueWithoutMesaInput[]
    updateMany?: ReservacionUpdateManyWithWhereWithoutMesaInput | ReservacionUpdateManyWithWhereWithoutMesaInput[]
    deleteMany?: ReservacionScalarWhereInput | ReservacionScalarWhereInput[]
  }

  export type ReservacionUncheckedUpdateManyWithoutMesaNestedInput = {
    create?: XOR<ReservacionCreateWithoutMesaInput, ReservacionUncheckedCreateWithoutMesaInput> | ReservacionCreateWithoutMesaInput[] | ReservacionUncheckedCreateWithoutMesaInput[]
    connectOrCreate?: ReservacionCreateOrConnectWithoutMesaInput | ReservacionCreateOrConnectWithoutMesaInput[]
    upsert?: ReservacionUpsertWithWhereUniqueWithoutMesaInput | ReservacionUpsertWithWhereUniqueWithoutMesaInput[]
    createMany?: ReservacionCreateManyMesaInputEnvelope
    set?: ReservacionWhereUniqueInput | ReservacionWhereUniqueInput[]
    disconnect?: ReservacionWhereUniqueInput | ReservacionWhereUniqueInput[]
    delete?: ReservacionWhereUniqueInput | ReservacionWhereUniqueInput[]
    connect?: ReservacionWhereUniqueInput | ReservacionWhereUniqueInput[]
    update?: ReservacionUpdateWithWhereUniqueWithoutMesaInput | ReservacionUpdateWithWhereUniqueWithoutMesaInput[]
    updateMany?: ReservacionUpdateManyWithWhereWithoutMesaInput | ReservacionUpdateManyWithWhereWithoutMesaInput[]
    deleteMany?: ReservacionScalarWhereInput | ReservacionScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutReservacionesInput = {
    create?: XOR<UsuarioCreateWithoutReservacionesInput, UsuarioUncheckedCreateWithoutReservacionesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutReservacionesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type MesaCreateNestedOneWithoutReservacionesInput = {
    create?: XOR<MesaCreateWithoutReservacionesInput, MesaUncheckedCreateWithoutReservacionesInput>
    connectOrCreate?: MesaCreateOrConnectWithoutReservacionesInput
    connect?: MesaWhereUniqueInput
  }

  export type EnumEstadoFieldUpdateOperationsInput = {
    set?: $Enums.Estado
  }

  export type UsuarioUpdateOneRequiredWithoutReservacionesNestedInput = {
    create?: XOR<UsuarioCreateWithoutReservacionesInput, UsuarioUncheckedCreateWithoutReservacionesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutReservacionesInput
    upsert?: UsuarioUpsertWithoutReservacionesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutReservacionesInput, UsuarioUpdateWithoutReservacionesInput>, UsuarioUncheckedUpdateWithoutReservacionesInput>
  }

  export type MesaUpdateOneRequiredWithoutReservacionesNestedInput = {
    create?: XOR<MesaCreateWithoutReservacionesInput, MesaUncheckedCreateWithoutReservacionesInput>
    connectOrCreate?: MesaCreateOrConnectWithoutReservacionesInput
    upsert?: MesaUpsertWithoutReservacionesInput
    connect?: MesaWhereUniqueInput
    update?: XOR<XOR<MesaUpdateToOneWithWhereWithoutReservacionesInput, MesaUpdateWithoutReservacionesInput>, MesaUncheckedUpdateWithoutReservacionesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRolFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolFilter<$PrismaModel> | $Enums.Rol
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolWithAggregatesFilter<$PrismaModel> | $Enums.Rol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolFilter<$PrismaModel>
    _max?: NestedEnumRolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumEstadoFilter<$PrismaModel = never> = {
    equals?: $Enums.Estado | EnumEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.Estado[] | ListEnumEstadoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Estado[] | ListEnumEstadoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoFilter<$PrismaModel> | $Enums.Estado
  }

  export type NestedEnumEstadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Estado | EnumEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.Estado[] | ListEnumEstadoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Estado[] | ListEnumEstadoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoWithAggregatesFilter<$PrismaModel> | $Enums.Estado
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoFilter<$PrismaModel>
    _max?: NestedEnumEstadoFilter<$PrismaModel>
  }

  export type ReservacionCreateWithoutUsuarioInput = {
    fecha: Date | string
    hora: Date | string
    personas: number
    estado?: $Enums.Estado
    createdAt?: Date | string
    mesa: MesaCreateNestedOneWithoutReservacionesInput
  }

  export type ReservacionUncheckedCreateWithoutUsuarioInput = {
    id?: number
    fecha: Date | string
    hora: Date | string
    personas: number
    estado?: $Enums.Estado
    mesaId: number
    createdAt?: Date | string
  }

  export type ReservacionCreateOrConnectWithoutUsuarioInput = {
    where: ReservacionWhereUniqueInput
    create: XOR<ReservacionCreateWithoutUsuarioInput, ReservacionUncheckedCreateWithoutUsuarioInput>
  }

  export type ReservacionCreateManyUsuarioInputEnvelope = {
    data: ReservacionCreateManyUsuarioInput | ReservacionCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type ReservacionUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: ReservacionWhereUniqueInput
    update: XOR<ReservacionUpdateWithoutUsuarioInput, ReservacionUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ReservacionCreateWithoutUsuarioInput, ReservacionUncheckedCreateWithoutUsuarioInput>
  }

  export type ReservacionUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: ReservacionWhereUniqueInput
    data: XOR<ReservacionUpdateWithoutUsuarioInput, ReservacionUncheckedUpdateWithoutUsuarioInput>
  }

  export type ReservacionUpdateManyWithWhereWithoutUsuarioInput = {
    where: ReservacionScalarWhereInput
    data: XOR<ReservacionUpdateManyMutationInput, ReservacionUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type ReservacionScalarWhereInput = {
    AND?: ReservacionScalarWhereInput | ReservacionScalarWhereInput[]
    OR?: ReservacionScalarWhereInput[]
    NOT?: ReservacionScalarWhereInput | ReservacionScalarWhereInput[]
    id?: IntFilter<"Reservacion"> | number
    fecha?: DateTimeFilter<"Reservacion"> | Date | string
    hora?: DateTimeFilter<"Reservacion"> | Date | string
    personas?: IntFilter<"Reservacion"> | number
    estado?: EnumEstadoFilter<"Reservacion"> | $Enums.Estado
    usuarioId?: IntFilter<"Reservacion"> | number
    mesaId?: IntFilter<"Reservacion"> | number
    createdAt?: DateTimeFilter<"Reservacion"> | Date | string
  }

  export type ReservacionCreateWithoutMesaInput = {
    fecha: Date | string
    hora: Date | string
    personas: number
    estado?: $Enums.Estado
    createdAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutReservacionesInput
  }

  export type ReservacionUncheckedCreateWithoutMesaInput = {
    id?: number
    fecha: Date | string
    hora: Date | string
    personas: number
    estado?: $Enums.Estado
    usuarioId: number
    createdAt?: Date | string
  }

  export type ReservacionCreateOrConnectWithoutMesaInput = {
    where: ReservacionWhereUniqueInput
    create: XOR<ReservacionCreateWithoutMesaInput, ReservacionUncheckedCreateWithoutMesaInput>
  }

  export type ReservacionCreateManyMesaInputEnvelope = {
    data: ReservacionCreateManyMesaInput | ReservacionCreateManyMesaInput[]
    skipDuplicates?: boolean
  }

  export type ReservacionUpsertWithWhereUniqueWithoutMesaInput = {
    where: ReservacionWhereUniqueInput
    update: XOR<ReservacionUpdateWithoutMesaInput, ReservacionUncheckedUpdateWithoutMesaInput>
    create: XOR<ReservacionCreateWithoutMesaInput, ReservacionUncheckedCreateWithoutMesaInput>
  }

  export type ReservacionUpdateWithWhereUniqueWithoutMesaInput = {
    where: ReservacionWhereUniqueInput
    data: XOR<ReservacionUpdateWithoutMesaInput, ReservacionUncheckedUpdateWithoutMesaInput>
  }

  export type ReservacionUpdateManyWithWhereWithoutMesaInput = {
    where: ReservacionScalarWhereInput
    data: XOR<ReservacionUpdateManyMutationInput, ReservacionUncheckedUpdateManyWithoutMesaInput>
  }

  export type UsuarioCreateWithoutReservacionesInput = {
    nombre: string
    correo: string
    password: string
    rol?: $Enums.Rol
    createdAt?: Date | string
  }

  export type UsuarioUncheckedCreateWithoutReservacionesInput = {
    id?: number
    nombre: string
    correo: string
    password: string
    rol?: $Enums.Rol
    createdAt?: Date | string
  }

  export type UsuarioCreateOrConnectWithoutReservacionesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutReservacionesInput, UsuarioUncheckedCreateWithoutReservacionesInput>
  }

  export type MesaCreateWithoutReservacionesInput = {
    numero: number
    capacidad: number
    disponible?: boolean
    createdAt?: Date | string
  }

  export type MesaUncheckedCreateWithoutReservacionesInput = {
    id?: number
    numero: number
    capacidad: number
    disponible?: boolean
    createdAt?: Date | string
  }

  export type MesaCreateOrConnectWithoutReservacionesInput = {
    where: MesaWhereUniqueInput
    create: XOR<MesaCreateWithoutReservacionesInput, MesaUncheckedCreateWithoutReservacionesInput>
  }

  export type UsuarioUpsertWithoutReservacionesInput = {
    update: XOR<UsuarioUpdateWithoutReservacionesInput, UsuarioUncheckedUpdateWithoutReservacionesInput>
    create: XOR<UsuarioCreateWithoutReservacionesInput, UsuarioUncheckedCreateWithoutReservacionesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutReservacionesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutReservacionesInput, UsuarioUncheckedUpdateWithoutReservacionesInput>
  }

  export type UsuarioUpdateWithoutReservacionesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateWithoutReservacionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MesaUpsertWithoutReservacionesInput = {
    update: XOR<MesaUpdateWithoutReservacionesInput, MesaUncheckedUpdateWithoutReservacionesInput>
    create: XOR<MesaCreateWithoutReservacionesInput, MesaUncheckedCreateWithoutReservacionesInput>
    where?: MesaWhereInput
  }

  export type MesaUpdateToOneWithWhereWithoutReservacionesInput = {
    where?: MesaWhereInput
    data: XOR<MesaUpdateWithoutReservacionesInput, MesaUncheckedUpdateWithoutReservacionesInput>
  }

  export type MesaUpdateWithoutReservacionesInput = {
    numero?: IntFieldUpdateOperationsInput | number
    capacidad?: IntFieldUpdateOperationsInput | number
    disponible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MesaUncheckedUpdateWithoutReservacionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    capacidad?: IntFieldUpdateOperationsInput | number
    disponible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservacionCreateManyUsuarioInput = {
    id?: number
    fecha: Date | string
    hora: Date | string
    personas: number
    estado?: $Enums.Estado
    mesaId: number
    createdAt?: Date | string
  }

  export type ReservacionUpdateWithoutUsuarioInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    personas?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mesa?: MesaUpdateOneRequiredWithoutReservacionesNestedInput
  }

  export type ReservacionUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    personas?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    mesaId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservacionUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    personas?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    mesaId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservacionCreateManyMesaInput = {
    id?: number
    fecha: Date | string
    hora: Date | string
    personas: number
    estado?: $Enums.Estado
    usuarioId: number
    createdAt?: Date | string
  }

  export type ReservacionUpdateWithoutMesaInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    personas?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutReservacionesNestedInput
  }

  export type ReservacionUncheckedUpdateWithoutMesaInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    personas?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    usuarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservacionUncheckedUpdateManyWithoutMesaInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    personas?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    usuarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}