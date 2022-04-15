import { FunctionComponent } from "react"
import BoxCommon from "../BoxCommon/BoxCommon"
import { ClientsTable } from "./ClientsTable"

const Clients: FunctionComponent = () => {
  return (
    <BoxCommon title="Liste des clients" >
      <ClientsTable />
    </BoxCommon>
  )
}

export default Clients