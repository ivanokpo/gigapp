import { Box, IconButton, InputBase, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { SearchOutlined } from '@mui/icons-material';
import { useSearchParams } from 'react-router-dom';

type SearchbarProps = {
  searchEntity: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  onSearch: () => void;
  placeholder?: string;
};

export const Searchbar = (props: SearchbarProps) => {
  const { searchEntity, setSearchQuery, onSearch } = props;
  const [searchParams] = useSearchParams();
  const queryParam = searchParams.get('query') || '';

  const [query, setQuery] = useState(queryParam);

  // keep local state in sync with URL changes (back/forward navigation)
  useEffect(() => {
    setQuery(queryParam);
  }, [queryParam]);

  useEffect(() => {
    setSearchQuery(query);
  }, [query, setSearchQuery]);

  return (
    <Box sx={{ maxWidth: '100%' }}>
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        onSubmit={(e) => {
          setSearchQuery(query);
          e.preventDefault();

          onSearch();
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder={`Search for ${searchEntity}`}
          inputProps={{ 'aria-label': 'search' }}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          value={query}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={() => onSearch()}>
          <SearchOutlined />
        </IconButton>
      </Paper>
    </Box>
  );
};
