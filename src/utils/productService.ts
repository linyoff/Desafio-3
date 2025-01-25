
//interface para definir produto e os dados q serao recebidos
export interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    details: string;
    img: string;
    reviews: Array<{
      userId: string;
      userName: string;
      rating: number;
      comment: string;
      postedAt: string;
    }>;
    popularity: number;
    createdAt: string;
}

//exportando variavel que ira receber os dados por meio de funcao assincrona
//promise de retornar uma array do tipo Product
export const fetchProducts = async (): Promise<Product[]> => {
    const API_URL = "https://run.mocky.io/v3/a60ec0a9-e4e3-4753-be2f-197538645f06";

    try {
        //variavel com a resposta
        const response = await fetch(API_URL);
        //caso econtre erro ao buscar
        if(!response.ok){
            throw new Error(`Erro ao buscar produtos: ${response.statusText}`);
        }
        //em caso de sucesso define variavel do tipo array de produtos que ira receber a reposta
        const data: Product[] = await response.json();
        return data;
        
    } catch (error) {
        console.error(error);
        throw error;
    }
};
  