import { FunctionComponent, useState } from "react";
import { Badge, Button } from "@mui/material"

const Info: FunctionComponent = () => {
  const [exp, setExp] = useState<number>(0)

  const handleClick = () => {
    alert('Appelez nous au 376-383-2009')
  }

  return (
    <>
      <div style={{ width: '10rem', marginLeft: '1rem' }}>
        <Button variant="contained" sx={{ mb: '1rem' }} onClick={handleClick}
        >Nous contacter</Button>
        <Badge color="secondary" badgeContent={exp}>
          <Button variant="contained" onClick={() => setExp(exp + 1)}>
            Incrémenter
          </Button>
        </Badge>
      </div>
    </>
  )
}

export default Info