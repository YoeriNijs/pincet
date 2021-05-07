import {flatUnion, flatUnionWith, union, unionWith} from "../../internal/union";

interface Person {
	name: string;
	age: number
}

describe('Union', () => {
	describe('#union', () => {
		it('should merge multiple one dimensional arrays', () => {
			const first: string[] = ['aap', 'noot'];
			const second: string[] = ['mies'];
			const result = union<string>(first, second);
			expect(result).toEqual(['aap', 'noot', 'mies']);
		});

		it('should merge multiple one dimensional arrays with different types', () => {
			const first: string[] = ['true'];
			const second: boolean[] = [true];
			const result = union<any>(first, second);
			expect(result).toEqual(['true', true]);
		});
	});

	describe('#unionWith', () => {
		it('should merge multiple arrays with a predicate', () => {
			const first: Person[] = [
				{ name: 'Harry Potter', age: 18 }
			];
			const second: Person[] = [
				{ name: 'Severus Snape', age: 38 },
				{ name: 'Ronald Weasley', age: 18 }
			];
			const result = unionWith<Person>((p: Person) => p.age < 38, first, second);
			expect(result).toEqual([
				{ name: 'Harry Potter', age: 18 },
				{ name: 'Ronald Weasley', age: 18 }
			]);
		});
	});

	describe('#flatUnion', () => {
		it('should merge multi dimensional arrays with depth of one', () => {
			const first = ['aap', ['noot']];
			const second = ['mies'];
			const result = flatUnion(first, second);
			expect(result).toEqual(['aap', 'noot', 'mies']);
		});

		it('should merge multi dimensional arrays with high depth', () => {
			const first = ['aap', ['noot', ['mies', ['wim']]]];
			const second = ['zus'];
			const result = flatUnion(first, second);
			expect(result).toEqual(['aap', 'noot', 'mies', 'wim', 'zus']);
		});
	});

	describe('#flatUnionWith', () => {
		it('should flatten and merge multiple arrays with a predicate', () => {
			const first = [
				{ name: 'Harry Potter', age: 18 }
			];
			const second = [
				{ name: 'Severus Snape', age: 38 },
				[
					{ name: 'Ronald Weasley', age: 18 }
				]
			];
			const result = flatUnionWith((p: Person) => p.age < 38, first, second);
			expect(result).toEqual([
				{ name: 'Harry Potter', age: 18 },
				{ name: 'Ronald Weasley', age: 18 }
			]);
		});
	});
});
