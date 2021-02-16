import React from 'react'

import { parseISO, formatDistanceToNow } from 'date-fns'

export const TimeAgo = ({ timestamp }) => {
  let duration = ''
  const parsedTimestamp = parseISO(timestamp)
  const parsedDistance = formatDistanceToNow(parsedTimestamp)
  duration = `${parsedDistance} Ago`

  return (
    <span>
      <i>{duration}</i>
    </span>
  )
}
