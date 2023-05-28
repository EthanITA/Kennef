type Spec = {
	text: string
}
class Product {
	constructor(
		public id: string,
		public name: string,
		public price: number,
		public description?: string,
		public image?: string,
		public otherImages?: string[],
		public category?: string,
		public quantity?: number,
		public sizes?: string[],
		public specs?: Spec[],
		public otherCategories?: string[]
	) {}

	get soldOut(): boolean {
		return !this.quantity || this.quantity <= 0
	}

	get hasOffer(): boolean {
		return false
	}

	static getRandomProducts(): Product[] {
		const specs = [
			{
				text: 'Peso: 0,2 kg'
			},
			{
				text: 'Misure: punta da 3mm; lunghezza 75mm'
			}
		]
		const sizes = ['24', '32', '48', '52', '64']
		const images = ['https://picsum.photos/200/300', 'https://picsum.photos/200/300']
		return [
			new this(
				'Camicia',
				'Abbigliamento',
				10,
				'description',
				'https://picsum.photos/200/300',
				images,
				'Camicia',
				12,
				sizes,
				specs,
				images
			),
			new this(
				'Pantaloni',
				'Pantaloni',
				10,
				'description',
				'https://picsum.photos/200/300',
				images,
				'Pantaloni',
				12,
				sizes,
				specs,
				images
			),
			new this(
				'Pantaloni',
				'Abbigliamento',
				10,
				'description',
				'https://picsum.photos/200/300',
				images,
				'Pantaloni',
				12,
				sizes,
				specs,
				images
			),
			new this(
				'Calzini',
				'Calzini',
				10,
				'description',
				'https://picsum.photos/200/300',
				images,
				'Calzini',
				12,
				sizes,
				specs,
				images
			)
		]
	}

	public getImages(): string[] {
		const images: string[] = []
		if (this.image) {
			images.push(this.image)
		}
		return images.concat(this.otherImages || [])
	}
}

export default Product
