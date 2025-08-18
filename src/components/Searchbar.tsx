import { Alert,  Box, IconButton, InputBase, Paper, Snackbar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { SearchOutlined } from '@mui/icons-material';
import { useSearchParams } from 'react-router-dom';
import { searchSchema } from '@/schemas/searchSchema';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const searchbarAlerts = {
  successfulSearch: (
  <Alert icon={<CheckIcon fontSize="inherit"/>} severity='success'>
    Searching for events
  </Alert>),
  failedSearch: (
  <Alert icon={<CloseIcon fontSize="inherit"/>} severity='error'>
    Search query is invalid
  </Alert>)
}

type SearchbarProps = {
  searchEntity: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  onSearch: () => void;
  placeholder?: string;
};

export const Searchbar = (props: SearchbarProps) => {
  const { searchEntity, setSearchQuery, onSearch } = props;
  const [searchParams] = useSearchParams();
  const urlQueryParam = searchParams.get('query') || '';
  const [queryToSearch, setQueryToSearch] = useState(urlQueryParam);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [alert, setAlert] = useState(searchbarAlerts.failedSearch);


  useEffect(() => {
    setQueryToSearch(urlQueryParam);
  }, [urlQueryParam]);

  useEffect(() => {
    setSearchQuery(queryToSearch);
  }, [queryToSearch, setSearchQuery]);

  return (
    <Box sx={{ maxWidth: '100%' }}>
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        onSubmit={(e) => {
          
          if(!searchSchema.safeParse(queryToSearch).success){
          
            e.preventDefault();
            setAlert(searchbarAlerts.failedSearch)
            setShowSnackbar(true);
          } else {
            
            setSearchQuery(queryToSearch);
          e.preventDefault();
          
          onSearch();
          
          }
          
          
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder={`Search for ${searchEntity}`}
          inputProps={{ 'aria-label': 'search' }}
          onChange={(e) => {
            setQueryToSearch(e.target.value);
          }}
          value={queryToSearch}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={() => onSearch()}>
          <SearchOutlined />
        </IconButton>
      </Paper>
      <Snackbar 
        open={showSnackbar} 
        autoHideDuration={3000} 
        onClose={() => setShowSnackbar(false)} 
        anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
      >
       {alert} 
      </Snackbar>
    </Box>
  );
};
