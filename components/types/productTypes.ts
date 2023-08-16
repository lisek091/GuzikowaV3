export interface ProductTypes {
    nazwa? : string,
    opis? : string,
    obraz? : string,
    cena? : number,
  }
 export interface ProductListTypes {
    Kategoria:string,
    ListaProduktow : ProductTypes[],
  }
 export interface ProductArray {
    Produkty:ProductListTypes[]
  }
export interface OknoItem {
    img: string;
    opis: string;
  }
export interface OknaTypes {
    [key: string]: OknoItem
}