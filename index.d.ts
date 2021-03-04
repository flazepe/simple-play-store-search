declare module "simple-play-store-search" {
	export interface PlayStoreResult {
		icon: string;
		name: string;
		url: string;
		developer: {
			name: string;
			url: string;
		};
		price: string;
		description: string;
		rating: string;
	}
	
	export function search(query: string): Promise<PlayStoreResult | null>;
}
