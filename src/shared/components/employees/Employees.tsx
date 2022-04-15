import { FunctionComponent } from "react"
import Header from "../header/Header"
import BoxCommon from "../layout/BoxCommon"

const Employees: FunctionComponent = () => {
  return (
    <BoxCommon title="Liste des employées" path="employees" >
      <Header />
    </BoxCommon>
  )
}

export default Employees