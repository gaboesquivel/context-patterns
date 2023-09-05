/* eslint-disable @typescript-eslint/no-explicit-any */

import { isObject } from "../util";
import { IObject, IOptions, TMerged } from "./deep-merge.type";


export function deepMerge<T extends IObject[]>(...objects: T): TMerged<T[number]> {
  return objects.reduce((result, current) => {
    if (Array.isArray(current)) {
      throw new TypeError(
        "Arguments provided to ts-deepmerge must be objects, not arrays.",
      );
    }

    Object.keys(current).forEach((key) => {
      if (["__proto__", "constructor", "prototype"].includes(key)) {
        return;
      }

      if (Array.isArray(result[key]) && Array.isArray(current[key])) {
        result[key] = deepMerge.options.mergeArrays
          ? deepMerge.options.uniqueArrayItems
            ? Array.from(
                new Set((result[key] as unknown[]).concat(current[key])),
              )
            : [...result[key], ...current[key]]
          : current[key];
      } else if (isObject(result[key]) && isObject(current[key])) {
        result[key] = deepMerge(result[key] as IObject, current[key] as IObject);
      } else {
        result[key] =
          current[key] === undefined
            ? deepMerge.options.allowUndefinedOverrides
              ? current[key]
              : result[key]
            : current[key];
      }
    });

    return result;
  }, {}) as any;
}

const defaultOptions: IOptions = {
  allowUndefinedOverrides: true,
  mergeArrays: true,
  uniqueArrayItems: true,
};

deepMerge.options = defaultOptions;

deepMerge.withOptions = <T extends IObject[]>(
  options: Partial<IOptions>,
  ...objects: T
) => {
  deepMerge.options = {
    ...defaultOptions,
    ...options,
  };

  const result = deepMerge(...objects);

  deepMerge.options = defaultOptions;

  return result;
};

export default deepMerge;