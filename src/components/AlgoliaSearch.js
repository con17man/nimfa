import React from 'react'
import algoliasearch from 'algoliasearch/lite'
import { Configure, InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom'

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)

export default function AlgoliaSearch() {
  return (
    <InstantSearch
      indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME}
      searchClient={searchClient}
    >
      <Configure distinct />
      <SearchBox />
      <Hits />
    </InstantSearch>
  )
}