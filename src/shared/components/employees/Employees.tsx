import { FunctionComponent } from "react"
import BoxCommon from "../BoxCommon/BoxCommon"
import { EmployeesTable } from "./EmployeesTable"

const Employees: FunctionComponent = () => {
  return (
    <BoxCommon title="Liste des employées">
      <EmployeesTable />
    </BoxCommon>
  )
}

export default Employees