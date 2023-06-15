import React from 'react'
import styled from 'styled-components'

const MBtnBasic = styled.button`
  background-color: #7149c6;
  border-radius: 3rem;
  height: 3.4rem;
  width: 12rem;
  color: white;
  font-size: 1.4rem;
  cursor: pointer;
`

const MBtnDisabled = styled.button`
  background-color: #ada2ff;
  border-radius: 3rem;
  height: 3.4rem;
  width: 12rem;
  color: white;
  font-size: 1.4rem;
  cursor: pointer;
`

const MBtnActive = styled.button`
  background-color: #ffffff;
  border: 0.1rem solid #dbdbdb;
  border-radius: 3rem;
  height: 3.4rem;
  width: 12rem;
  color: #767676;
  font-size: 1.4rem;
  cursor: pointer;
`

export default function StyleMBtn() {
  return (
    <div>
      <MBtnBasic>팔로우</MBtnBasic>
      <MBtnDisabled>팔로우</MBtnDisabled>
      <MBtnActive>언팔로우</MBtnActive>
    </div>
  )
}
