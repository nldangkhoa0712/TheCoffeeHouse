import { Avatar, TextField } from '@mui/material'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useDebounce } from '../../utils/useDebounce'

interface Props {
  arrSize: SizeType[]
  onChange: any
}

interface SizeType {
  size: string
  price: number
  isValid: boolean
}

const Pricing = ({ arrSize, onChange }: Props) => {
  const handleProductSize = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    const updateArr = arrSize.map((item, i) => {
      if (item.size == name) {
        return { ...item, price: Number(value) }
      } else {
        return item
      }
    })
    onChange(updateArr)
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        marginTop: '20px',
      }}
    >
      {arrSize.map((item, index) => (
        <div key={index} style={{ display: 'flex', gap: '10px' }}>
          <Avatar
            sx={{
              backgroundColor: 'rgba(0,0,0,0.1)',
              color: 'black',
              width: '56px',
              height: '56px',
              borderRadius: '10px',
            }}
            variant="square"
          >
            {item.size}
          </Avatar>
          <TextField
            variant="outlined"
            fullWidth
            type="number"
            name={item.size}
            onChange={handleProductSize}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '20px !important',
              },
            }}
          />
        </div>
      ))}
    </div>
  )
}

export default Pricing
