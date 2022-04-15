import { FunctionComponent } from "react"
import BoxCommon from "../layout/BoxCommon"
import { EmployeesTable } from "./EmployeesTable"

const Employees: FunctionComponent = () => {
  return (
    <BoxCommon title="Liste des employées" path="employees" >
      <EmployeesTable />
    </BoxCommon>
  )
}

export default Employees