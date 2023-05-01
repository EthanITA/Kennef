export default class {
	constructor(
		public id: string,
		public name: string,
		public price: number,
		public description?: string,
		public image?: string,
		public category?: string,
		public quantity?: number
	) {}

	get soldOut(): boolean {
		return !this.quantity || this.quantity <= 0
	}
}
