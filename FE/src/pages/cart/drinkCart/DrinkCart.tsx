import React, { useState } from 'react'
import { useDeleteCart, useGetAllCart } from '../../../hooks/cart.api'
import { CartItem } from '../../../models/cart.model'
import { formatCurrency } from '../../../utils/formatCurrency'

const DrinkCart = () => {
  //   const [cartItems, setCartItems] = useState([
  //     {
  //       id: 1,
  //       name: 'Trà sữa trân châu',
  //       price: 35000,
  //       quantity: 2,
  //       toppings: [
  //         { name: 'Trân châu đen', price: 5000 },
  //         { name: 'Pudding', price: 5000 },
  //       ],
  //       image: '/api/placeholder/80/80',
  //     },
  //     {
  //       id: 2,
  //       name: 'Cà phê sữa đá',
  //       price: 25000,
  //       quantity: 1,
  //       toppings: [{ name: 'Kem cheese', price: 10000 }],
  //       image: '/api/placeholder/80/80',
  //     },
  //     {
  //       id: 3,
  //       name: 'Matcha đá xay',
  //       price: 45000,
  //       quantity: 1,
  //       toppings: [],
  //       image: '/api/placeholder/80/80',
  //     },
  //   ])

  const { data: cartItems } = useGetAllCart()
  const remove = useDeleteCart()

  const removeItem = (id: number) => {
    remove.mutateAsync(id)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="mx-auto max-w-4xl rounded-lg bg-white p-6 shadow-md">
        <h1 className="mb-6 text-center text-2xl font-bold">
          Giỏ hàng của bạn
        </h1>

        {cartItems && cartItems.length === 0 ? (
          <div className="py-8 text-center">
            <p className="text-gray-500">Giỏ hàng của bạn đang trống</p>
            <button className="mt-4 rounded bg-blue-500 px-4 py-2 text-white">
              Tiếp tục mua sắm
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6">
              {cartItems &&
                cartItems.map((item: CartItem) => (
                  <div
                    key={item.productId}
                    className="mb-4 flex flex-col border-b pb-4 sm:flex-row"
                  >
                    <div className="mb-4 flex items-center sm:mb-0">
                      <img
                        src={item.imageDefaultNavigation.firebaseImage}
                        alt={item.categoryName}
                        className="h-16 w-16 rounded object-cover"
                      />
                      <div className="ml-4">
                        <h3 className="font-medium">{item.categoryName}</h3>
                        <p className="text-sm text-gray-600">
                          {formatCurrency(item.price)}
                        </p>

                        {/* {item.toppings.length > 0 && (
                        <div className="mt-1">
                          <p className="text-sm text-gray-500">Topping:</p>
                          <ul className="text-xs text-gray-500">
                            {item.toppings.map(
                              (topping: any, index: number) => (
                                <li key={index}>
                                  {topping.name} {topping.price}
                                </li>
                              ),
                            )}
                          </ul>
                        </div>
                      )} */}
                      </div>
                    </div>

                    <div className="mt-2 flex items-center justify-between sm:ml-auto sm:mt-0">
                      <div className="flex items-center rounded border">
                        <button
                          // onClick={() => decreaseQuantity(item.id)}
                          className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                        >
                          -
                        </button>
                        <span className="px-3 py-1">{item.quantity}</span>
                        <button
                          // onClick={() => increaseQuantity(item.id)}
                          className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>

                      <div className="ml-6 text-right">
                        <p className="font-medium">
                          {/* {formatCurrency((item.price + item.toppings.reduce((sum, t) => sum + t.price, 0)) * item.quantity)} */}
                          200000
                        </p>
                        <button
                          onClick={() => removeItem(item.cartId)}
                          className="text-sm text-red-500 hover:underline"
                        >
                          Xóa
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <div className="border-t pt-4">
              <div className="mb-2 flex justify-between">
                <span>Tạm tính:</span>
                {/* <span>{formatCurrency(calculateTotal())}</span> */}
                200000
              </div>
              <div className="mb-6 flex justify-between text-lg font-bold">
                <span>Tổng cộng:</span>
                {/* <span>{formatCurrency(calculateTotal())}</span> */}
                200000
              </div>

              <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
                <button className="rounded border border-blue-500 px-4 py-2 text-blue-500 hover:bg-blue-50">
                  Tiếp tục mua sắm
                </button>
                <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
                  Thanh toán
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default DrinkCart
