import { TextField } from "@mui/material"
import { FunctionComponent } from "react"

type MissionChangerProps = {
  setEmployee: (id: string, mission: string) => void;
  employeeId: string;
}

const MissionChanger: FunctionComponent<MissionChangerProps> = (props: MissionChangerProps) => {
  return (
    <TextField id="standard-basic" label="Mission" variant="standard" onChange={(event) => props.setEmployee(props.employeeId, event.target.value)}></TextField>
  )
}

export default MissionChanger