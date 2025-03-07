import { Box, Button, Card, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PersonIcon from '@mui/icons-material/Person'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import PlaceIcon from '@mui/icons-material/Place'
import { storageService } from '../../storage'
import moment from 'moment'
import { useQueries, useQuery } from '@tanstack/react-query'
import { AddressService, UserService } from '../../api/services'
import DialogCustom from '../Dialog/DialogCustom'
import AddAddress from '../Address/AddAddress'
import { useDeleteAddress, useGetDetail } from '../../hooks/address.api'
import { AddressModel } from '../../models/address.model'
import DeleteIcon from '@mui/icons-material/Delete'

const Information = () => {
  const [openDialog, setOpenDialog] = useState<boolean>(false)
  const [itemUpdates, setItemUpdate] = useState<any>(undefined)
  const [update, setUpdate] = useState<boolean>(false)
  const [arr, setArr] = useState<any>([])
  const getDetail = useGetDetail()
  const { mutateAsync: mutateDeleteAddress } = useDeleteAddress()
  const [{ data: listAddress, refetch }, { data: infoUser }] = useQueries({
    queries: [
      {
        queryKey: ['getAddress'],
        queryFn: () => AddressService.getAddress(),
        refetchOnWindowFocus: false,
      },
      {
        queryKey: ['infoUser'],
        queryFn: async () => await UserService.getUserInfo(),
        refetchOnWindowFocus: false,
      },
    ],
  })

  const getArrAddress = async () => {
    const a = await Promise.all(
      listAddress!.map(async (item: AddressModel) => {
        if (
          item.district !== '0' &&
          item.province !== '0' &&
          item.ward !== '0'
        ) {
          const district = await getDetail.mutateAsync(item.district)
          const province = await getDetail.mutateAsync(item.province)
          const ward = await getDetail.mutateAsync(item.ward)
          return {
            ...item,
            fullAddress: `${item.addressNumber}, ${ward.data.name}, ${district.data.name}, ${province.data.name}`,
          }
        }
        return ''
      }),
    )
    setArr(a)
  }

  const handleUpdate = (item: any) => {
    const { fullAddress, ...itemUpdate } = item
    setItemUpdate(itemUpdate)
    setOpenDialog(true)
    setUpdate(true)
  }

  useEffect(() => {
    if (listAddress) {
      getArrAddress()
    }
  }, [listAddress])

  const handleOpen = () => {
    setOpenDialog(true)
    setUpdate(false)
  }

  const handleDelete = (item: any) => {
    mutateDeleteAddress(item.id)
  }

  const handleClose = () => {
    setOpenDialog(false)
  }

  return (
    <div>
      <DialogCustom
        open={openDialog}
        title="Thêm địa chỉ"
        onClose={handleClose}
        component={
          <AddAddress
            setOpen={setOpenDialog}
            refetch={refetch}
            itemUpdate={itemUpdates}
            update={update}
          />
        }
      />
      <h1 className="text-5xl font-semibold">Peronal information</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit,
        numquam, corrupti quibusdam repellat pariatur rerum praesentium dolor
        veritatis unde veniam voluptate error nihil dicta, in esse quam dolorem
        eum itaque.
      </p>
      <Box sx={{ marginTop: '20px' }}>
        <Card
          sx={{
            backgroundColor: '#F9F6F2',
            borderRadius: '10px',
            padding: '20px',
          }}
        >
          <div className="flex items-center justify-between text-[#DA5036]">
            <p className="text-xl font-semibold">
              <PersonIcon />
              <span className="mx-2">Thông tin cá nhân</span>
            </p>
            <Button
              sx={{
                marginRight: '0.75rem',
                cursor: 'pointer',
                justifyContent: 'space-between',
                borderRadius: '0.8rem',
                backgroundColor: '#DA5036',
                padding: '0.5rem 1rem',
                color: '#FFFFFF',
              }}
            >
              <BorderColorIcon />
              Chỉnh sửa
            </Button>
          </div>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              marginTop: '20px',
              marginBottom: '20px',
            }}
          >
            <div className="col-span-2">
              <Typography className="text-xl font-light text-[#727272]">
                Họ tên
              </Typography>
              <p className="text-xl">{`${infoUser?.fullName}`}</p>
            </div>
            <div className="col-span-2">
              <Typography className="text-xl font-light text-[#727272]">
                Ngày sinh
              </Typography>
              <p className="text-xl">{`${moment(infoUser?.dateOfBirth).format('DD/MM/yyyy')}`}</p>
            </div>
          </Box>

          <hr />

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              alignContent: 'center',
              marginTop: '20px',
              marginBottom: '20px',
            }}
          >
            <div className="col-span-2">
              <Typography className="text-xl font-light text-[#727272]">
                Số điện thoại
              </Typography>
              <p className="text-xl">{infoUser?.phoneNumber}</p>
            </div>
            <div className="col-span-2">
              <Typography className="text-xl font-light text-[#727272]">
                Email
              </Typography>
              <p className="text-xl">{infoUser?.email}</p>
            </div>
          </Box>

          <hr />

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              marginTop: '20px',
              marginBottom: '20px',
            }}
          >
            <div className="col-span-2">
              <Typography className="text-xl font-light text-[#727272]">
                Mã thành viên
              </Typography>
              <p className="text-xl">{infoUser?.id}</p>
            </div>
            <div className="col-span-2">
              <Typography className="text-xl font-light text-[#727272]">
                Đơn đã đặt
              </Typography>
              <p className="text-xl">{infoUser?.orderedCount}</p>
            </div>
          </Box>
        </Card>
      </Box>

      <Box sx={{ marginTop: '20px', marginBottom: '20px' }}>
        <Card
          sx={{
            backgroundColor: '#F9F6F2',
            borderRadius: '10px',
            padding: '20px',
          }}
        >
          <div className="flex cursor-pointer items-center justify-between text-[#DA5036]">
            <p className="text-xl font-semibold">
              <PlaceIcon />
              <span className="mx-2">Thông tin địa chỉ</span>
            </p>
            <Button
              onClick={handleOpen}
              sx={{
                marginRight: '0.75rem',
                cursor: 'pointer',
                justifyContent: 'space-between',
                borderRadius: '0.8rem',
                backgroundColor: '#DA5036',
                padding: '0.5rem 1rem',
                color: '#FFFFFF',
              }}
            >
              <BorderColorIcon />
              Thêm địa chi
            </Button>
          </div>
          <Box
            sx={{
              marginTop: '20px',
            }}
          >
            <Typography className="text-xl font-light text-[#727272]">
              Địa chỉ
            </Typography>
            {listAddress &&
              arr.map((item: any, index: number) => {
                return (
                  <>
                    <div className="flex items-center justify-between">
                      <p className="text-xl" key={index}>
                        {item.fullAddress}
                      </p>
                      <div>
                        <button
                          onClick={() => {
                            handleUpdate(item)
                          }}
                          className="mr-5 cursor-pointer text-blue-500"
                        >
                          <BorderColorIcon />
                        </button>

                        <button
                          onClick={() => {
                            handleDelete(item)
                          }}
                          className="mr-5 cursor-pointer text-red-500"
                        >
                          <DeleteIcon />
                        </button>
                      </div>
                    </div>
                    {index == arr?.length - 1 ? null : <hr className="my-3" />}
                  </>
                )
              })}
          </Box>
        </Card>
      </Box>
    </div>
  )
}

export default Information
