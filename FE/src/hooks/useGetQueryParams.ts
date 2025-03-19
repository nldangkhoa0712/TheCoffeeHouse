// import { useLocation } from "react-router-dom"

// type a = {
//     a: number,
//     b: number
// }

// export const useGetQueryParams = () => {
//     const { search } = useLocation()
//     const 

//     return { a: 1, b: 2 }
// }

// import { SetURLSearchParams, useSearchParams } from "react-router-dom";

import { SetURLSearchParams, useSearchParams } from "react-router-dom";

// export function useGetParams<T extends Record<string, string | null>>(): [T, SetURLSearchParams] {
//     const [searchParams, setSearchParams] = useSearchParams()
//     const _searchParams = {} as T

//     for (const key in _searchParams) {
//         _searchParams[key] = searchParams.get(key) as any
//     }

//     return [_searchParams, setSearchParams]
// }

export function useGetParams<T>(): [T, SetURLSearchParams] {
    const [searchParams, setSearchParams] = useSearchParams();
    const _searchParams = Object.fromEntries(searchParams.entries()) as T;

    return [_searchParams, setSearchParams];
}