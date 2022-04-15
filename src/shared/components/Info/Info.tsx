import { FunctionComponent, useState } from "react";
import { Badge, Button } from "@mui/material"

const Info: FunctionComponent = () => {
  // Hook 
  const [exp, setExp] = useState<number>(0)

  const handleClick = () => {
    alert('Appelez nous au 376-383-2009')
  }

  const isEven = (num: number) => {
    return num % 2 == 0;
  }

  return (
    <>
      <div style={{ width: '10rem', marginLeft: '1rem' }}>

        <Button variant="contained" sx={{ mb: '1rem' }} onClick={handleClick}>
          Nous contacter
        </Button>

        <Badge color="secondary" badgeContent={exp}>
          {/* Use the hook to set exp value */}
          <Button variant="contained" onClick={() => setExp(exp + 1)}>
            Incrémenter
          </Button>
        </Badge>

        {/* Conditionnal display */}
        {isEven(exp) && <div>Le nombre est pair</div>}
      </div>
    </>
  )
}

export default Info