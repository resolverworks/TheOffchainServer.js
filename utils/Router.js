import {log} from './utils.js';

export class Router {
	constructor(slug) {
		this.slug = slug;
	}
	get path() {
		return `/${this.slug}/`;
	}
	log(...a) {
		log(this.path, ...a);
	}
	async fetch_record({name, labels, sender}) {
		throw new Error('missing fetch_record()');
	}
	// async fetch_root() {
	// 	
	// }
	require_root() {
		if (!this.fetch_root) {
			throw new Error('fetch_root() not supported');
		}
		return this.fetch_root();
	}
}
