import * as mutations from './mutations.ts';
import * as actions from './actions.ts';

export * from './getters.ts';

export function commit(method: string, ...obj:Array<object>) {
	mutations[method](...obj);
}

export function dispatch(method: string, ...obj:Array<object>):Promise<Object> {
	return actions[method](...obj);
}