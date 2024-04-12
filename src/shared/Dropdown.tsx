import { FormControl, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent } from "@mui/material"

type DropdownProps = {
  id: string
  label: string
  value: string
  onChange: (event: SelectChangeEvent<string>) => void
  list: string[]
}

const Dropdown = ({id, label, value, onChange, list}: DropdownProps) => {
  return (
    <FormControl>
      <InputLabel id={`${id}-select-label`}>{label}</InputLabel>
      <Select
        labelId={`${id}-select-label`}
        id={`${id}-select`}
        value={value}
        onChange={onChange}
        input={<OutlinedInput label={label} />}
        fullWidth
      >
        {list?.map((item) => (
            <MenuItem key={item} value={item}>{item}</MenuItem>
          ))}
      </Select>
    </FormControl>
  )
}

export default Dropdown