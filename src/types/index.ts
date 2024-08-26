export type MenuItem = {
    id: number
    name: string
    price: number
    category: string
}

export type OrderItem = MenuItem &{
    quantity: number
}

