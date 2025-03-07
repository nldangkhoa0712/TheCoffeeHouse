import {
  Button,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material'
import { useQueries } from '@tanstack/react-query'
import { ChangeEvent, useEffect, useState } from 'react'
import { AddressService } from '../../../api/services'
import { useAddAddress, useUpdateAddress } from '../../../hooks/address.api'

interface ProvincesModels {
  province: string
  district: string
  ward: string
  fullName: string
  phoneNumber: string
  addressNumber: string
}

interface Props {
  setOpen: any
  refetch: any
  itemUpdate: any
  update: boolean
}

const defaultValueProvinces = {
  province: '0',
  district: '0',
  ward: '0',
  fullName: '',
  phoneNumber: '',
  addressNumber: '',
}

const AddAddress = ({ refetch, setOpen, itemUpdate, update }: Props) => {
  const [provinces, setProvinces] = useState<ProvincesModels>(
    defaultValueProvinces,
  )
  const [
    { data: listProvinces },
    { data: listDistricts },
    { data: listWards },
  ] = useQueries({
    queries: [
      {
        queryKey: ['listProvinces'],
        queryFn: async () => await AddressService.getProvinces(),
        refetchOnWindowFocus: false,
      },
      {
        queryKey: ['listDistricts', provinces.province],
        queryFn: async () =>
          await AddressService.getDistricts(provinces.province!),
        enabled: provinces.province !== '',
        refetchOnWindowFocus: false,
      },
      {
        queryKey: ['listWards', provinces.district],
        queryFn: async () => await AddressService.getWards(provinces.district!),
        enabled: provinces.district !== '',
        refetchOnWindowFocus: false,
      },
    ],
  })
  const { mutateAsync: mutateAddAddress, isError, isLoading } = useAddAddress()
  const { mutateAsync: mutateUpdateAddress } = useUpdateAddress()

  const handleChangeProvinces = (
    e:
      | SelectChangeEvent<HTMLInputElement | HTMLTextAreaElement | string>
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: keyof ProvincesModels,
  ) => {
    setProvinces({ ...provinces, [key]: e.target.value })
  }

  const handleReset = () => {
    setOpen(false)
    setProvinces(defaultValueProvinces)
  }

  const handleAddAddress = async () => {
    if (
      provinces.district !== '' &&
      provinces.province !== '' &&
      provinces.ward !== ''
    ) {
      await mutateAddAddress(provinces)
      if (!isLoading && !isError) {
        handleReset()
      }
      refetch()
    }
  }

  const handleUpdateAddress = () => {
    mutateUpdateAddress(provinces)
  }

  useEffect(() => {
    if (itemUpdate && update) {
      setProvinces(itemUpdate)
      return
    }
    setProvinces(defaultValueProvinces)
  }, [itemUpdate, update])

  return (
    <div className="flex flex-col gap-5">
      <FormControl fullWidth>
        <label htmlFor="" className="mb-4 text-xl">
          Địa chỉ nhà
        </label>
        <TextField
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '50px',
            },
          }}
          placeholder="Số nhà"
          value={provinces.addressNumber}
          onChange={(e) => {
            handleChangeProvinces(e, 'addressNumber')
          }}
        />
      </FormControl>

      <FormControl fullWidth>
        <label htmlFor="" className="mb-4 text-xl">
          Tên đầy đủ
        </label>
        <TextField
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '50px',
            },
          }}
          placeholder="Full Name"
          value={provinces.fullName}
          onChange={(e) => {
            handleChangeProvinces(e, 'fullName')
          }}
        />
      </FormControl>

      <FormControl fullWidth>
        <label htmlFor="" className="mb-4 text-xl">
          Số điện thoại
        </label>
        <TextField
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '50px',
            },
          }}
          placeholder="Phone"
          value={provinces.phoneNumber}
          onChange={(e) => {
            handleChangeProvinces(e, 'phoneNumber')
          }}
        />
      </FormControl>

      <FormControl fullWidth>
        <label htmlFor="" className="mb-4 text-xl">
          Tỉnh/Thành
        </label>
        <Select
          sx={{ borderRadius: '50px' }}
          value={provinces.province || '0'}
          onChange={(e) => {
            handleChangeProvinces(e, 'province')
          }}
        >
          <MenuItem value={'0'}>Tỉnh/Thành</MenuItem>
          {listProvinces &&
            listProvinces.data?.map((item: any, index: number) => {
              return (
                <MenuItem key={index} value={item.id}>
                  {item.name}
                </MenuItem>
              )
            })}
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <label htmlFor="" className="mb-4 text-xl">
          Quận/Huyện
        </label>
        <Select
          sx={{ borderRadius: '50px' }}
          value={provinces.district || '0'}
          onChange={(e) => {
            handleChangeProvinces(e, 'district')
          }}
        >
          <MenuItem value={'0'}>Quận/Huyện</MenuItem>
          {listDistricts &&
            listDistricts.data?.map((item: any, index: number) => {
              return (
                <MenuItem key={index} value={item.id}>
                  {item.name}
                </MenuItem>
              )
            })}
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <label htmlFor="" className="mb-4 text-xl">
          Phường/Xã
        </label>
        <Select
          sx={{ borderRadius: '50px' }}
          value={provinces.ward || '0'}
          onChange={(e) => {
            handleChangeProvinces(e, 'ward')
          }}
        >
          <MenuItem value={'0'}>Phường/Xã</MenuItem>
          {listWards &&
            listWards.data?.map((item: any, index: number) => {
              return (
                <MenuItem key={index} value={item.id}>
                  {item.name}
                </MenuItem>
              )
            })}
        </Select>
      </FormControl>

      {update ? (
        <Button
          onClick={handleUpdateAddress}
          sx={{
            backgroundColor: '#DA5036',
            color: 'white',
            padding: '12px 16px',
            borderRadius: '50px',
            mt: '20px',
          }}
        >
          Cập nhật địa chi
        </Button>
      ) : (
        <Button
          onClick={handleAddAddress}
          sx={{
            backgroundColor: '#DA5036',
            color: 'white',
            padding: '12px 16px',
            borderRadius: '50px',
            mt: '20px',
          }}
        >
          Thêm địa chỉ
        </Button>
      )}
    </div>
  )
}

export default AddAddress
