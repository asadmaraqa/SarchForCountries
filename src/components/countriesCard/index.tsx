import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import IconButton from '@material-ui/core/IconButton'
import FirstPageIcon from '@material-ui/icons/FirstPage'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import LastPageIcon from '@material-ui/icons/LastPage'
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from '@material-ui/core/styles'
import TablePagination from '@material-ui/core/TablePagination'

import { fetchCountriesApi, addCountry } from '../../redux/actions'
import Card from './Card'
import SearchContext from '../../context/search/searchContext'
import { AppState, CardData } from '../../globalTypes'

const useStyles1 = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexShrink: 0,
      marginLeft: theme.spacing(2.5),
    },
  })
)

interface TablePaginationActionsProps {
  count: number
  page: number
  rowsPerPage: number
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const classes = useStyles1()
  const theme = useTheme()
  const { count, page, rowsPerPage, onPageChange } = props

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, 0)
  }

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page - 1)
  }

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page + 1)
  }

  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1))
  }

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  )
}

const CountriesCard = () => {
  const loading = useSelector((state: AppState) => state.country.isLoading)
  const countries = useSelector((state: AppState) => state.country.countries)
  const likedCountry = useSelector((state: AppState) => state.like.like)
  const [searchedCountries, setSearchedCountries] = useState(countries)
  const [paginatedCountires, setpaginatedCountires] = useState(countries)
  const { input } = useContext(SearchContext)

  useEffect(() => {
    setSearchedCountries(countries)
  }, [countries])

  useEffect(() => {
    const search_resualt: [] = countries.filter((country: CardData) =>
      country.name.common.toLowerCase().includes(input?.toLowerCase())
    ) as []

    setSearchedCountries(search_resualt)
  }, [input, countries])
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCountriesApi())
  }, [dispatch])

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(15)

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }
  useEffect(() => {
    const paginationCountires = searchedCountries.slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    ) as []
    setpaginatedCountires(paginationCountires)
  }, [page, rowsPerPage, searchedCountries])
  return (
    <section>
      <div className="countryCard">
        {loading && <h1>Loading please wait ....</h1>}

        {!loading &&
          paginatedCountires.map((country: CardData) => (
            <Card
              {...country}
              key={country.name.common}
              onClick={() => dispatch(addCountry(country))}
              buttonStatus={likedCountry.includes(country)}
            />
          ))}
      </div>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
        colSpan={3}
        count={searchedCountries.length}
        rowsPerPage={rowsPerPage}
        page={page}
        SelectProps={{
          inputProps: { 'aria-label': 'rows per page' },
          native: true,
        }}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        ActionsComponent={TablePaginationActions}
      />
    </section>
  )
}

export default CountriesCard
