import { Checkbox, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, SelectChangeEvent } from "@mui/material"
import { ProductType } from "../types"

type MultiSelectDropdownProps = {
  id: string
  label: string
  value: ProductType[]
  onChange: (event: SelectChangeEvent<ProductType[]>) => void
  list: ProductType[]
  disabled: boolean
}

const MultiSelectDropdown = ({id, label, value, onChange, list, disabled}: MultiSelectDropdownProps) => {
  return (
    <FormControl>
      <InputLabel id={`${id}product-multiple-select-label`}>{label}</InputLabel>
      <Select
        labelId={`${id}product-multiple-select-label`}
        id={`${id}product-multiple-select`}
        multiple
        value={value}
        onChange={onChange}
        input={<OutlinedInput label="Select Product" />}
        renderValue={(selected) => selected.map(item => item.title).join(', ')}
        fullWidth
        disabled={disabled}
      >
        {list.map((item) => (
          <MenuItem key={item.id} value={item}>
            <Checkbox checked={value.indexOf(item) > -1} />
            <ListItemText primary={item.title} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default MultiSelectDropdown