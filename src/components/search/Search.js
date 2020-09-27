import React, { Fragment, useEffect, useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const SearchModal = ({ show, onClose, searchIndex }) => {

  const [ searchTerm, setSearchTerm ] = useState('');
  const [ searchHits, setSearchHits ] = useState([]); // searchIndex.allHits

  useEffect(() => {
    const results = searchIndex.allHits.map(hit => {
      return {
        path: hit.path,
        text: hit.text.filter(entry => entry.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
      }
    });

    setSearchHits(results);
  }, [searchTerm, searchIndex]);

  const handleChange = e => {
    setSearchTerm(e.target.value);
  }

  return( (!show) ? null :
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-black opacity-75" role="none" onClick={onClose}></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>

        <div className="inline-block text-left overflow-hidden transform transition-all sm:align-middle sm:w-full max-w-lg rounded" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
          <div className="bg-white p-4">
            <div className="flex">
                <input className="bg-white focus:outline-none rounded block w-11/12 px-2 appearance-none leading-normal" value={searchTerm} onChange={handleChange} type="text" placeholder="Cauta..." />
                <button onClick={onClose} className="rounded-full w-10 h-10 hover:bg-gray-100">
                  <FontAwesomeIcon icon="times" />
                </button>
              {/* <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"></div> */}
            </div>

            <div className="flex flex-col h-64 overflow-scroll">
              {searchTerm.length !==0 && searchHits.map((hit, i) => (
                <Fragment key={i}>
                  {hit && hit.text.map((entry, j) => (
                    <Link to={hit.path} key={j} onClick={onClose} className="block px-2 py-1 hover:bg-gray-100 rounded">
                      {entry.length < 50 ? entry : `${entry.substr(0, 50)}...`}
                    </Link>))
                  }
                </Fragment>
              ))}

              {(searchTerm.length !==0 && searchHits.filter(hit => hit.text.length !== 0).length === 0) && <div className="text-gray-500">Niciun rezultat pentru "{searchTerm}"</div>}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

const Search = () => {
  const [ toggleModal, setToggleModal ] = useState(false);

  const { searchIndex } = useStaticQuery(graphql`
    query SiteSearch {
      searchIndex {
        allHits {
          path
          text
        }
      }
    }
  `);

  return(
    <div className="z-20">
      <button className="flex items-center font-light p-2 rounded hover:bg-gray-100 focus:bg-gray-100" onClick={() => setToggleModal(!toggleModal)}>
        <span className="lowercase text-sm pr-1">Search</span> <FontAwesomeIcon icon='search' />
      </button>

      <SearchModal
        show={toggleModal}
        onClose={() => setToggleModal(!toggleModal)}
        searchIndex={searchIndex}
      />
    </div>
  );
};

export default Search;