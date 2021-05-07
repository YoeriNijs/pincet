import { flatDeep } from "../util/flat-deep";

export function union<T>(...list: T[][]): T[] {
	return list.reduce((prev, cur) => prev.concat(cur), []);
}

export function unionWith<T>(predicate: (v: T) => boolean, ...list: T[][]): T[] {
	return list
		.reduce((prev, cur) => prev.concat(cur), [])
		.filter(predicate)
}

export function flatUnion(...list: unknown[][]): unknown[] {
	const flattened = flatDeep<unknown>(list, Infinity);
	return [flattened].reduce((prev, cur) => prev.concat(cur), []);
}

export function flatUnionWith(predicate: (v: any) => boolean, ...list: unknown[]): unknown[] {
	const flattened = flatDeep<unknown>(list, Infinity);
	return [flattened]
		.reduce((prev, cur) => prev.concat(cur), [])
		.filter(predicate);
}
