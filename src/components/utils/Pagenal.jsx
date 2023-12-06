import React from 'react'
import { Grid } from '@mui/material'
import { useSelector } from 'react-redux'
import BasicPagination from './BasicPagination'
import ListItem from '../list/ListItem'

const Pagenal = () => {
  const content = useSelector((state) => state.listLike.content)
  const { pageNum, limitPerPage } = useSelector((state) => state.pages)
  //Расчет индексов начала и конца подмассива для текущей страницы
  const startIndex = (pageNum - 1) * limitPerPage
  const endIndex = startIndex + limitPerPage
  //Подмассив контента для текущей страницы
  const displayedContent = content.slice(startIndex, endIndex)

  const totalPages = Math.ceil(content.length / limitPerPage)

  return (
    <div id={`page=${pageNum}`}>
      <Grid container rowGap={3}>
        {displayedContent.map((item) => (
          <Grid key={item.id} item md={4} sm={6} xs={6}>
            <ListItem {...item} />
          </Grid>
        ))}
      </Grid>
      <BasicPagination totalPages={totalPages}/>
    </div>
  )
}

export default Pagenal
