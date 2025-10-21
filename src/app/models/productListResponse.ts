export interface ProductListResponse {
    limit:number;
    skip:number;
    total:number;
    products:ProductListDto[];
}

interface ProductListDto {
    id:number;
    title:string;
    description:string;    
    price:number;
}