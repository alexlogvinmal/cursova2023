interface ProductItemType {
    id: string,
    name: string,
    price: number,
    seller: string,
    stock: number
}


export const ProductItem = ({ id, name, price, seller, stock }: ProductItemType) => {


    return (
        <tr>
            <td>{name}</td>
            <td>{seller}</td>
            <td>{price}$</td>
            <td>{stock}</td>
        </tr>

    )
}