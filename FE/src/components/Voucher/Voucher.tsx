import {
  Box,
  Button,
  Card,
  FormControl,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material'
import React, {
  Dispatch,
  MouseEvent,
  SetStateAction,
  useEffect,
  useState,
} from 'react'
import { useDebounce } from '../../utils/useDebounce'
import { useGetListVoucher } from '../../hooks/voucher.api'
import { VoucherModel } from '../../models/voucher.model'
import ImageVoucher from '../../images/thecoffee-removebg.png'
import { formatCurrency } from '../../utils/formatCurrency'
import { PayloadCartModel } from '../../models/cart.model'

type VoucherProps = {
  setDiscountValue: Dispatch<SetStateAction<number>>
  handleChangeCart: (
    key: keyof PayloadCartModel,
    value: number | number[],
  ) => void
  handleClose: Dispatch<SetStateAction<boolean>>
}

const Voucher = ({
  setDiscountValue,
  handleChangeCart,
  handleClose,
}: VoucherProps) => {
  const [code, setCode] = useState<string>('')
  const debounce = useDebounce(code)
  const [discount, setDiscount] = useState<VoucherModel>()
  const [listVoucherSearch, setListVoucherSearch] = useState<
    VoucherModel[] | undefined
  >(undefined)
  const { data: listVoucher } = useGetListVoucher()

  useEffect(() => {
    if (debounce == '' || !listVoucher) return setListVoucherSearch(undefined)
    const arrSearch = listVoucher.filter((item: VoucherModel) =>
      item.code.toLocaleLowerCase().includes(debounce.toLocaleLowerCase()),
    )
    setListVoucherSearch(arrSearch)
  }, [debounce])

  const handleChangeDiscount = (
    event: MouseEvent<HTMLElement>,
    discountValue: VoucherModel,
  ) => {
    setDiscount(discountValue)
  }

  const handleApplyVoucher = () => {
    setDiscountValue(discount ? discount.discountValue : 0)
    handleChangeCart('voucherId', discount ? discount.id : 0)
    handleClose(true)
  }

  return (
    <div>
      {/* Search */}
      <FormControl fullWidth>
        <TextField
          value={code}
          onChange={(e) => {
            setCode(e.target.value.trim())
          }}
          placeholder="Nhập mã voucher"
        />
      </FormControl>

      {/* List Item */}
      <Box sx={{ overflowY: 'auto', height: '350px' }}>
        <ToggleButtonGroup
          value={discount}
          exclusive
          onChange={handleChangeDiscount}
          aria-label="text alignment"
          sx={{ display: 'flex', flexDirection: 'column' }}
        >
          {listVoucher &&
            (listVoucherSearch ? listVoucherSearch : listVoucher).map(
              (item: VoucherModel, idx: number) => {
                return (
                  <ToggleButton
                    key={idx}
                    sx={{
                      textAlign: 'left',
                      justifyContent: 'start',
                      border: '1px solid #ccc !important',
                      marginY: '10px',
                      borderRadius: '10px !important',
                      marginX: '0 !important',
                      gap: '10px',
                    }}
                    value={item}
                    aria-label="left aligned"
                  >
                    <img
                      src={ImageVoucher}
                      alt=""
                      width={100}
                      style={{ borderRight: '1px solid #f3f6f4' }}
                    />
                    <div style={{ width: '100%' }}>
                      <Typography>{item.description}</Typography>
                      <hr />
                      <span>Giảm {formatCurrency(item.discountValue)}</span>
                    </div>
                  </ToggleButton>
                )
              },
            )}
        </ToggleButtonGroup>
      </Box>

      <p style={{ color: '#da5036', marginBottom: '10px', fontSize: '18px' }}>
        Bạn đã tiết kiệm được:{' '}
        {formatCurrency(discount ? discount.discountValue : 0)}
      </p>
      <Button
        onClick={handleApplyVoucher}
        sx={{
          width: '100%',
          background: '#da5036',
          borderRadius: '10px',
          color: 'white',
        }}
      >
        Áp dụng
      </Button>
    </div>
  )
}

export default Voucher
