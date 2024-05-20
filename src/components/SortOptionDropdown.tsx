import React from 'react'

type Props = {
    onChange: (value: string) => void;
    sortOption: string;
}

const SortOptionDropdown = ({
    onChange, sortOption
}: Props) => {
  return (
    <div>SortOptionDropdown</div>
  )
}

export default SortOptionDropdown;