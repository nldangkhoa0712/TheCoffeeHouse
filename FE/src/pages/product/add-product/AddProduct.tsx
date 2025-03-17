import {
  Avatar,
  Box,
  Button,
  Card,
  FormControl,
  Grid2 as Grid,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import React, {
  BaseSyntheticEvent,
  ChangeEvent,
  useEffect,
  useRef,
  useState,
} from 'react'
import { Controller, set, useForm } from 'react-hook-form'
import Pricing from '../../../components/Pricing/Pricing'
import SelectCategory from '../../../components/Select/SelectCategory'
import UploadImg from '../../../components/UploadImg/UploadImg'
import { AddProductRequest } from '../../../models/product.model'
import {
  fileToFileRequestData,
  prepareImgsFn,
} from '../../../utils/convertBase64'
import { useAddProduct } from '../../../hooks/product.api'

interface SizeType {
  size: string
  price: number
  isValid: boolean
}

const AddProduct = () => {
  const [sizes, setSizes] = useState<SizeType[]>([])
  const addProduct = useAddProduct()

  const handleAddProductSizes = (value: string[]) => {
    if (sizes.length > value.length) {
      const arrUpdate = sizes.filter((item) => value.includes(item.size))
      setSizes(arrUpdate)
      return
    }

    const newProductSize = value.filter((item) => {
      return !sizes.some((itemSize) => itemSize.size == item)
    })

    if (newProductSize.length > 0) {
      const arr = newProductSize.map((item) => {
        return { size: item, price: 0, isValid: true }
      })
      setSizes([...sizes, ...arr])
      return
    }

    const productSize: SizeType[] = value.map((item: string) => {
      return { size: item, price: 0, isValid: true }
    })
    setSizes(productSize)
  }

  const { control, handleSubmit, getValues, setValue } =
    useForm<AddProductRequest>({
      defaultValues: {
        productName: '',
        description: '',
        productSizes: [],
        categoryId: '',
        isValid: true,
        images: [],
        imageDefaultNavigation: undefined,
      },
    })

  const onSubmit = (data: AddProductRequest, e?: BaseSyntheticEvent) => {
    e?.preventDefault()
    // const newSizes = sizes.map((item: SizeType) => {
    //   const {id, ...newItem} = item
    // })
    const payload = {
      ...data,
      productSizes: sizes,
    }
    console.log(payload)
    addProduct.mutateAsync(payload)
  }
  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Button type="submit">Add Product</Button>
      <Grid container spacing={6}>
        {/* Generation Infomation */}
        <Grid size={8}>
          <Card
            sx={{
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            <h2>Generation Infomation</h2>
            <Controller
              control={control}
              name="productName"
              render={({ field }) => {
                return (
                  <>
                    <FormControl>
                      <label
                        style={{ marginBottom: '10px' }}
                        htmlFor="name-product"
                      >
                        Name Product
                      </label>
                      <TextField
                        value={field.value}
                        id="name-product"
                        placeholder="Coffee"
                        onChange={field.onChange}
                      />
                    </FormControl>
                  </>
                )
              }}
            />

            <Controller
              control={control}
              name="description"
              render={({ field }) => {
                return (
                  <>
                    <FormControl>
                      <label style={{ marginBottom: '10px' }} htmlFor="">
                        Description
                      </label>
                      <TextField
                        multiline
                        rows={4}
                        value={field.value}
                        onChange={field.onChange}
                      ></TextField>
                    </FormControl>
                  </>
                )
              }}
            />

            <ToggleButtonGroup
              color="primary"
              id="select-size"
              value={sizes.map((item) => item.size)}
              onChange={(e, sizes) => handleAddProductSizes(sizes)}
              sx={{
                flexDirection: 'column',
                gap: '10px',
              }}
              aria-label="Platform"
            >
              <label htmlFor="select-size">
                Size <br />{' '}
                <span style={{ fontSize: '12px', opacity: '0.6' }}>
                  Pick Available Size
                </span>
              </label>
              <div style={{ display: 'flex', gap: '10px' }}>
                <ToggleButton
                  sx={{
                    borderRadius: '10px !important',
                    border: '1px solid #ccc !important',
                    padding: '11px 18px !important',
                  }}
                  value="S"
                >
                  S
                </ToggleButton>
                <ToggleButton
                  sx={{
                    borderRadius: '10px !important',
                    border: '1px solid #ccc !important',
                    padding: '11px 18px !important',
                  }}
                  value="M"
                >
                  M
                </ToggleButton>
                <ToggleButton
                  sx={{
                    borderRadius: '10px !important',
                    border: '1px solid #ccc !important',
                    padding: '11px 18px !important',
                  }}
                  value="L"
                >
                  L
                </ToggleButton>
              </div>
            </ToggleButtonGroup>
          </Card>
        </Grid>

        {/* Upload Image */}
        <Grid size={4}>
          <Card sx={{ padding: '20px', width: '100%' }}>
            <h3>Upload Image</h3>
            <Controller
              control={control}
              name="images"
              render={({ field }) => (
                <UploadImg
                  images={field.value}
                  onChange={field.onChange}
                  setImageDefault={setValue}
                />
              )}
            />
          </Card>
        </Grid>

        {/* Pricing */}
        <Grid size={8}>
          <Card sx={{ padding: '20px' }}>
            <h2>Price</h2>
            <Pricing arrSize={sizes} onChange={setSizes} />
          </Card>
        </Grid>

        {/* Category */}
        <Grid size={4}>
          <Card sx={{ padding: '20px' }}>
            <h2>Category</h2>
            <Controller
              control={control}
              name="categoryId"
              render={({ field }) => (
                <SelectCategory
                  handleChangeCategoryId={field.onChange}
                  categoryId={field.value}
                />
              )}
            />
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default AddProduct
