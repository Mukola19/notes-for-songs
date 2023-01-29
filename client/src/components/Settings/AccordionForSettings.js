import React from 'react'
import { Accordion, AccordionSummary, AccordionDetails,Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'


export const AccordionForSettings = ({ title, description, children }) => {
  return (
    <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
    >
      <Typography sx={{ width: '18%', flexShrink: 0 }}>{title}</Typography>
      <Typography sx={{ color: 'text.secondary' }}>{description}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
     {children}
      </Typography>
    </AccordionDetails>
  </Accordion>
  )
}
