interface ProductItemType {
    id: string,
    name: string,
    price: number,
    seller: string,
    stock: number
}


export const ModalZvitItem = ({ id, name, price, seller, stock }: ProductItemType) => {


    return (
        <tr>
            <td>{name}</td>
            <td>{price}$</td>
            <td>{stock}</td>
        </tr>

    )
}