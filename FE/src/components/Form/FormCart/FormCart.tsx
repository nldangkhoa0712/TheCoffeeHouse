import {
  Box,
  FormControl,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { MouseEventHandler, useState } from 'react'
import { AddressService } from '../../../api/services'
import { AddressModel } from '../../../models/address.model'
import { PayloadCartModel } from '../../../models/cart.model'
import { useCreateOrder } from '../../../hooks/cart.api'

type FormCartProps = {
  handleChangeCart: (
    key: keyof PayloadCartModel,
    value: number | number[],
  ) => void
  payloadCart: PayloadCartModel
}

const FormCart = ({ handleChangeCart, payloadCart }: FormCartProps) => {
  const [address, setAddress] = useState<number>()
  const createOrder = useCreateOrder()
  const { data: dataGetAddress } = useQuery({
    queryKey: ['getAddress'],
    queryFn: async () => await AddressService.getAddress(),
  })
  const handleChangeAddress = (e: SelectChangeEvent<number>) => {
    setAddress(Number(e.target.value))
    handleChangeCart('addressId', Number(e.target.value))
  }

  const handleCreateOrder = () => {
    createOrder.mutateAsync(payloadCart)
  }

  return (
    <div className="flex w-[50%] flex-col items-center text-start">
      <h2 className="text-2xl">THÔNG TIN NGƯỜI NHẬN</h2>
      <Box component="form" noValidate sx={{ padding: '0 100px' }}>
        <FormControl fullWidth sx={{ marginY: '10px' }}>
          <label htmlFor="" className="mb-3 text-xl">
            Họ tên
          </label>
          <TextField
            placeholder="Name"
            sx={{ '& .MuiInputBase-root': { borderRadius: '50px' } }}
          />
        </FormControl>

        <FormControl fullWidth sx={{ marginY: '10px' }}>
          <label htmlFor="" className="mb-3 text-xl">
            Số điện thoại
          </label>
          <TextField
            placeholder="Phone"
            sx={{ '& .MuiInputBase-root': { borderRadius: '50px' } }}
          />
        </FormControl>

        <FormControl fullWidth sx={{ marginY: '10px' }}>
          <label htmlFor="" className="mb-3 text-xl">
            Địa chỉ
          </label>
          <Select
            sx={{
              borderRadius: '50px',
            }}
            value={address ?? 0}
            onChange={handleChangeAddress}
            displayEmpty
          >
            <MenuItem value={0} disabled>
              <span style={{ color: 'rgb(158 156 154)' }}>
                Chọn một tùy chọn
              </span>
            </MenuItem>
            {dataGetAddress &&
              dataGetAddress.map((item: AddressModel, index: number) => {
                return (
                  <MenuItem value={item.id} key={index}>
                    <Typography
                      sx={{
                        whiteSpace: 'normal',
                        wordWrap: 'break-word',
                      }}
                    >
                      {item.addressNumber}
                    </Typography>
                  </MenuItem>
                )
              })}
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ marginY: '10px' }}>
          <label htmlFor="" className="mb-3 text-xl">
            Phương thức thanh toán
          </label>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="1"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="1"
              sx={{ color: '#DA5036' }}
              control={
                <Radio
                  sx={{
                    color: '#DA5036',
                    '&.Mui-checked': {
                      color: '#DA5036',
                    },
                  }}
                />
              }
              label="Thanh toán trực tuyến"
            />
            <FormControlLabel
              sx={{ color: '#DA5036' }}
              value="2"
              control={
                <Radio
                  sx={{
                    color: '#DA5036',
                    '&.Mui-checked': {
                      color: '#DA5036',
                    },
                  }}
                />
              }
              label="Thanh toán khi nhận hàng"
            />
          </RadioGroup>
        </FormControl>

        <button
          onClick={handleCreateOrder}
          type="button"
          style={{
            width: '100%',
            backgroundColor: '#DA5036',
            padding: '10px 20px',
            fontSize: '20px',
            color: 'white',
            borderRadius: '50px',
          }}
        >
          Tiếp tục thanh toán
        </button>
      </Box>
    </div>
  )
}

export default FormCart
