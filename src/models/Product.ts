class Product {
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

	get hasOffer(): boolean {
		return false
	}

	static getRandomProducts(): Product[] {
		return [
			new this('Camicia', 'Abbigliamento', 10, 'description', 'https://picsum.photos/200/300', 'Camicia', 12),
			new this('Pantaloni', 'Pantaloni', 10, 'description', 'https://picsum.photos/200/300', 'Pantaloni', 12),
			new this('Pantaloni', 'Abbigliamento', 10, 'description', 'https://picsum.photos/200/300', 'Pantaloni', 12),
			new this('Calzini', 'Calzini', 10, 'description', 'https://picsum.photos/200/300', 'Calzini', 12)
		]
	}
}

export default Product
