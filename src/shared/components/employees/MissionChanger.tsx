import { TextField } from "@mui/material"
import { FunctionComponent } from "react"

type MissionChangerProps = {
  // handler passed from parent via the props
  setEmployee: (id: string, mission: string) => void;
  employeeId: string;
}

const MissionChanger: FunctionComponent<MissionChangerProps> = (props: MissionChangerProps) => {
  return (
    <TextField
      label="Mission"
      variant="standard"
      onChange={(event) => props.setEmployee(props.employeeId, event.target.value)} />
    // Trigger changes in child
  )
}

export default MissionChanger