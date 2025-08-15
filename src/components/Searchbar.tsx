import { Box, Divider, IconButton, InputBase, Paper, TextField } from '@mui/material'
import React, { useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import { SearchOutlined } from "@mui/icons-material";
import type { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';


type SearchbarProps = {
    searchEntity: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>
    onSearch: ()=>void

}

export const Searchbar = (props: SearchbarProps) => {
    const {searchEntity, setSearchQuery, onSearch} = props;

    

  return (
     <Box sx={{ width: '100%', maxWidth: '100%' }}>
    

      <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
      onSubmit={(e)=>{
        e.preventDefault();
        onSearch()
        }}
    >
   
      <InputBase
        sx={{ ml: 1, flex: 1 }}
         placeholder={`Search for ${searchEntity}`} 
        inputProps={{ 'aria-label': 'search' }}
        onChange={(e) => setSearchQuery(e.target.value)}

      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchOutlined />
      </IconButton>
      
    </Paper>
    </Box>
  )
}
