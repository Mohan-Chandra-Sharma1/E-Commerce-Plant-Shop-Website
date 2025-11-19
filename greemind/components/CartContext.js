"use client"
import { createContext, useContext, useMemo, useState } from 'react'

const CartCtx = createContext(null)

export function CartProvider({ children }) {
  const [count, setCount] = useState(0)
  const add = () => setCount(c => c + 1)
  const remove = () => setCount(c => Math.max(0, c - 1))
  const value = useMemo(() => ({ count, add, remove }), [count])
  return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>
}

export function useCart() {
  const ctx = useContext(CartCtx)
  if (!ctx) return { count: 0, add: () => {}, remove: () => {} }
  return ctx
}