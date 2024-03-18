import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Container, Typography, TextField, Button } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { db } from '../firebase';
import { updateDoc, doc } from 'firebase/firestore';

function TextEditorView() {
  const location = useLocation();
  const data = location.state;
  const [displayValue, setDisplayValue] = useState(data.discription);

  const handleChange = (value) => {
    setDisplayValue(value);
  };

  const editDiscription = async () => {
    const oneDoc = doc(db, 'documents', data.id);
    updateDoc(oneDoc, {
      discription: displayValue
    });
  };

  useEffect(() => {
    editDiscription();
  }, [displayValue]);

  return (
    <Container>
      <Typography variant="h2" className='mt-2'>{data.title}</Typography>
      <ReactQuill
        value={displayValue}
        onChange={handleChange}
        placeholder='Enter details'
        style={{ marginTop: '20px', marginBottom: '20px' }}
      />
    </Container>
  );
}

export default TextEditorView;