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

import SearchContext from '../../context/search/searchContext'
import { AppState, CardData } from '../../globalTypes'
import { numberWithSpaces } from '../../helper/numberWithSpaces'
import { addCountry, fetchCountriesApi } from '../../redux/actions'
import Button from '../Button'

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

const CountriesTable = () => {
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
  const isLiked: string[] = likedCountry.map(
    (country: any) => country.name.common
  )

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
    <>
      <table className="table">
        <tbody>
          <tr>
            <th>flag</th>
            <th>Name</th>
            <th>Languges</th>
            <th>Population</th>
            <th>Region</th>
          </tr>
          {!loading &&
            paginatedCountires.map((country: CardData) => (
              <tr key={country.name.common}>
                <img
                  src={country.flags.png}
                  alt={country.name.common}
                  className="table__image"
                />
                <td>{country.name.common}</td>
                <td>
                  {country.languages &&
                    Object.values(country.languages).map((lang: any) => (
                      <ul key={lang}>
                        <li>{lang}</li>
                      </ul>
                    ))}
                </td>
                <td>{numberWithSpaces(country.population)}</td>
                <td>{country.region}</td>
                <td>
                  {isLiked.includes(country.name.common) ? (
                    <Button title={'LIKED'} disable={true} />
                  ) : (
                    <Button
                      title={'LIKE'}
                      onClick={() => dispatch(addCountry(country))}
                    />
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
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
    </>
  )
}

export default CountriesTable
