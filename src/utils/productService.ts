
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

export interface ProductProp {
    product: Product;
}

//exportando variavel que ira receber os dados por meio de funcao assincrona
//promise de retornar uma array do tipo Product
export const fetchProducts = async (): Promise<Product[]> => {
    const API_URL = "https://run.mocky.io/v3/72b03f6f-68dd-482e-bdd9-fbb81c58dafe";

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

//irá buscar o produto pelo id
export const getProductById = async (id: string): Promise<Product | null> => {
    try {
        const products = await fetchProducts();
        return products.find((product) => product.id === id) || null;
    } catch (error) {
        console.error(error);
        return null;
    }
};


  