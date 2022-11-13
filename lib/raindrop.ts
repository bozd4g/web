interface CollectionDto {
    result: boolean
    items: BookmarkDto[]
    count: number
    collectionId: number
}

interface BookmarkDto {
    _id: number;
    excerpt: string;
    type: string;
    title: string;
    link: string;
    created: Date;
}

class Raindrop {
    private urlBuilder: RaindropUrlBuilder;

    constructor() {
        this.urlBuilder = new RaindropUrlBuilder();
    }

    public async getBookmars(page: number = 0): Promise<Response> {
        const url = this.urlBuilder
            .setCollectionId(27989692)
            .setPerPage(50)
            .setPage(page)
            .build();

        const response = await fetch(url, {
            headers: {
                "Authorization": `Bearer ${process.env.RAINDROP_API_KEY}`
            }
        });

        return response;
    }
}

class RaindropUrlBuilder {
    private baseUrl: string = "https://api.raindrop.io/rest/v1/raindrops/";
    private collectionId: number;
    private searchParams: URLSearchParams;

    constructor() {
        this.searchParams = new URLSearchParams();
    }

    public setCollectionId(collectionId: number): RaindropUrlBuilder {
        this.collectionId = collectionId;
        return this;
    }

    public setPage(page: number): RaindropUrlBuilder {
        this.searchParams.set("page", page.toString());
        return this;
    }

    public setPerPage(perPage: number): RaindropUrlBuilder {
        this.searchParams.set("perpage", perPage.toString());
        return this;
    }

    public setSort(sort: string): RaindropUrlBuilder {
        this.searchParams.set("sort", sort);
        return this;
    }

    public build(): string {
        return `${this.baseUrl}${this.collectionId}?${this.searchParams.toString()}`;
    }
}

export type { CollectionDto, BookmarkDto };
export default Raindrop;